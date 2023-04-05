import "dotenv/config";
import express from "express";
import cors from "cors";
import { dbConnect } from "./config/dbConnect.js";
import movieRoute from "./routes/movie.route.js";

const app = express();
const port = process.env.PORT || 3000

dbConnect();

app.use(express.json())
app.use(cors());

app.use("/api", movieRoute)

app.listen(port, () => {
    console.log(`Server is running on ${port}`);
});