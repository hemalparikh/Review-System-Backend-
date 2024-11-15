import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import dbconnect from './config/database.js';
import router from "./routes/feedbackRoutes.js";

dotenv.config();

const app = express();
const PORT = 2000;

app.use(express.json());

dbconnect();

app.use('/api/v1', router);

app.listen(PORT, () => {
    console.log(`Server is running at ${PORT}`);
});
