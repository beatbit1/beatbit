const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: "./config/.env"});
const connectDB = require("./dbConnect/db");
const cors = require("cors");
const fileUpload = require("express-fileupload");




const path = require("path");

// Validate required environment variables
const requiredEnvVars = ["BACKEND_URL", "FRONTEND_URL"];
requiredEnvVars.forEach((key) => {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

const app = express();


const PORT = process.env.PORT || 4000;


// Determine BACKEND_URL dynamically
const BACKEND_URL = process.env.NODE_ENV === "production" ? process.env.BACKEND_URL : `http://localhost:${PORT}`;

        
console.log(`Backend URL: ${BACKEND_URL}`);

//middle calls
app.use(express.json());
app.use(fileUpload());



const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            process.env.FRONTEND_URL, // Production frontend
            "http://localhost:5173", // Local frontend
            "https://web.telegram.org"
        ];

        // Allow requests with no origin (like mobile apps, server-to-server requests)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET,POST,PUT,DELETE",
    credentials: true, // Allows sending cookies
};

app.use(cors(corsOptions));

//connect db
connectDB()

//serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Telegram WebApp manifest
app.get('/manifest.json', (req, res) => {
  res.json({
    name: 'BeatBit App',
    short_name: 'BeatBit',
    start_url: '/',
    display: 'standalone',
    background_color: '#000000',
    theme_color: '#000000',
    description: 'Revolutionize music creation on the blockchain.',
  });
});


//imported routes
const musicianRoutes = require("./routes/musicianRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const userRoutes = require("./routes/userRoute");
const chartRoute = require("./routes/chartsRoutes");


// Route middlewares
app.use("/api/v2/musicians", musicianRoutes);
app.use("/api/v2/upload-file", uploadRoutes);
app.use("/api/v2/users", userRoutes);
app.use("/api/v2/charts", chartRoute);




app.get("/", (req, res) => {
    res.send("Hello from beatbit project backend!");
  });



  // Start the server with dynamic port handling for Vercel
if (process.env.NODE_ENV === "production") {
    module.exports = app;
  } else {
    app.listen(PORT, () => {
      console.log(`Server is running on ${BACKEND_URL}`);
    });
  }
  