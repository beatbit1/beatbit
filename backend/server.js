const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: "./config/.env"});
const connectDB = require("./dbConnect/db");
const cors = require("cors");
const fileUpload = require("express-fileupload");

const app = express();
const musicianRoutes = require("./routes/musicianRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const userRoutes = require("./routes/userRoute");
const chartRoute = require("./routes/chartsRoutes");

const path = require("path");


const PORT = process.env.PORT || 4000;

//middle calls
app.use(express.json());
app.use(fileUpload());
const corsOptions = {
    origin: (origin, callback) => {
        const allowedOrigins = [
            process.env.FRONTEND_URL, // Production frontend
            "http://localhost:5173", // Local frontend
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


// Route middlewares
app.use("/api/v2/musicians", musicianRoutes);
app.use("/api/v2/upload-file", uploadRoutes);
app.use("/api/v2/users", userRoutes);
app.use("/api/v2/charts", chartRoute);

app.get("/", (req, res) => {
    res.send("Hello from Vercel!");
  });



app.listen(PORT, ()=> {
    console.log(`Server is running on localhost:${PORT}`)
})