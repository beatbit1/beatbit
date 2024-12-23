const express = require("express");
const dotenv = require("dotenv");
dotenv.config({path: "./config/.env"});
const connectDB = require("./dbConnect/db");
const cors = require("cors")
const app = express();
const musicianRoutes = require("./routes/musicianRoutes");
const uploadRoutes = require("./routes/uploadRoutes.js");
const path = require("path");


const PORT = process.env.PORT || 4000;

//middle calls
app.use(express.json());
app.use(
    cors({
        origin: "http://localhost:5173", // Allow only this frontend URL
        methods: "GET,POST,PUT,DELETE", // Allow specific HTTP methods
        credentials: true, // Allow cookies and authentication headers
    })
);


//connect db
connectDB()

//serve static files
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

//route middlewares
app.use("/api/v2", musicianRoutes);
app.use("/api/v2", uploadRoutes)




app.listen(PORT, ()=> {
    console.log(`Server is running on localhost:${PORT}`)
})