const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");

const envFile =
    process.env.Node_ENV == "production"
        ? ".env.production"
        : ".env.development";
dotenv.config({ path: path.resolve(__dirname, `../../${envFile}`) });

const DB_CONNECTION_STRING = process.env.DB_CONNECTION_STRING;

async function connectDB() {
    try {
        await mongoose.connect(DB_CONNECTION_STRING);
        console.log("DB connected");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectDB;
