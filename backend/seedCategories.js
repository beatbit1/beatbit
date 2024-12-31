const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({path: "./config/.env"});
const connectDB = require("./dbConnect/db");
const Category = require("./model/CategoryModel");


const categories = ["Pop", "Jazz", "Blues", "Rock", "Classical", "Hip-hop"];

async function seedCategories() {
    try {
        await connectDB();


        // Check if categories already exist
        const existingCategories = await Category.find();
        if (existingCategories.length > 0) {
            console.log("Categories already exist in the database.");
            return;
        }

        // Insert new categories
        const categoryDocs = categories.map(name => ({ name }));
        await Category.insertMany(categoryDocs);

        console.log("Categories successfully inserted!");
    } catch (error) {
        console.error("Error inserting categories:", error);
    } finally {
        mongoose.connection.close();
    }
}

seedCategories();