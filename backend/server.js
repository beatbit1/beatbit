const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: "./config/.env"});
const connectDB = require("./dbConnect/db");
const cors = require("cors");

const app = express();
const fileUpload = require("express-fileupload");
const musicianRoutes = require("./routes/musicianRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const userRoutes = require("./routes/userRoute");
const chartRoute = require("./routes/chartsRoutes");

const path = require("path");


// Validate required environment variables
if (!process.env.PORT || !process.env.BACKEND_URL) {
    console.error("Missing required environment variables in .env file.");
    process.exit(1);
}

const PORT = process.env.PORT || 4000;

// Determine BACKEND_URL dynamically
const BACKEND_URL =
    process.env.NODE_ENV === "production"
        ? process.env.BACKEND_URL
        : `http://localhost:${PORT}`;


// Log the environment and backend URL for debugging
console.log(`Environment: ${process.env.NODE_ENV || "development"}`);
console.log(`Backend URL: ${BACKEND_URL}`);




// Middlewares
app.use(express.json());
app.use(fileUpload());


// CORS configuration
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            process.env.FRONTEND_URL,
            "http://localhost:5173",
        ];
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: "GET, POST, PUT, DELETE",
    credentials: true,
};

app.use(cors(corsOptions));

//connect db
connectDB();



// Serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Route middlewares
app.use("/api/v2/musicians", musicianRoutes);
app.use("/api/v2/uploadFile", uploadRoutes);
app.use("/api/v2/users", userRoutes);
app.use("/api/v2/charts", chartRoute);

app.get("/", (req, res) => {
    res.send("Hello from the beatbit backend");
  });


//Start server
app.listen(PORT, ()=> {
    console.log(`Server is running on localhost:${PORT}`)
})