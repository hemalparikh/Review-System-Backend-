import mongoose from "mongoose";

const dbconnect = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("MongoDB connected successfully");
    } catch (error) {
        console.log("MongoDB connection failed", error);
    }
};

export default dbconnect;
