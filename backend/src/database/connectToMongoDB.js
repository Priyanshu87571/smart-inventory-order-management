import mongoose from "mongoose";
import processEnvVar from "../utils/processEnvVariable.js";

const MONGO_URI = processEnvVar.MONGO_URI;

// connect to database using mongoose ODM
const connectToMongoDB = async() => {
    try {
        const dbInstance = await mongoose.connect(MONGO_URI);
        console.log("MongoDB connected successfully!");
    } catch (error) {
        console.log("MongoDB connection error:", error);
    }
};

export default connectToMongoDB;
