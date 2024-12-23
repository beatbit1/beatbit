const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            serverSelectionTimeoutMS: 30000, // 30 seconds
        });
        console.log("Database connected")
    } catch (error) {
        console.log("MongoDB connection failed:", error.message)
        process.exit(1)//exit connection if fails
    }
}

module.exports = connectDB