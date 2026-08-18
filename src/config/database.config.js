import mongoose from "mongoose";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

const DB_FIRST_IP="1.1.1.1";

const DB_LAST_IP="8.8.8.8";

dns.setServers([DB_FIRST_IP, DB_LAST_IP]);

export const connectDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Database connected");
    } catch (error) {
        console.log(error);
    }
};