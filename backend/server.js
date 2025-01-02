const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: "./config/.env"});
const connectDB = require("./dbConnect/db");
const cors = require("cors")
const app = express();
const musicianRoutes = require("./routes/musicianRoutes");
const uploadRoutes = require("./routes/uploadRoutes");
const userRoutes = require("./routes/userRoute");
const chartRoute = require("./routes/chartsRoutes");

const path = require("path");


const PORT = process.env.PORT || 4000;

//middle calls
app.use(express.json());
const corsOptions = {
    origin: process.env.FRONTEND_URL || "http://localhost:5173", // Default to localhost for development
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
};

app.use(cors(corsOptions));


//connect db
connectDB()

//serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.get("/", (req, res) => {
    res.send("Hello from Vercel!");
  });

//route middlewares
app.use("/api/v2", musicianRoutes);
app.use("/api/v2", uploadRoutes);
app.use("/api/v2", userRoutes);
app.use("/api/v2", chartRoute);





app.listen(PORT, ()=> {
    console.log(`Server is running on localhost:${PORT}`)
})