import express from "express";
import cors from "cors";
import { connectDatabase } from "./src/config/database.config.js";
import routes from "./src/routes/guest.routes.js";


const app = express();


app.use(cors());
app.use(express.json());

try {
    connectDatabase();
} catch (error) {
    console.log(error);
}

app.use("/api", routes);

export default app;
