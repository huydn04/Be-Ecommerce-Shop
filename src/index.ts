import express from "express";
import config from "./config/server/config.services";
import connectDB from "./config/database/db.config";
import cors from "cors"
import bodyParser from "body-parser";
const app = express();

app.use(cors)
app.use(express.json());

app.use(bodyParser.json())

connectDB()
app.get("/", async (req, res) => {
  res.send("hehehe");
});

app.listen(config.PORT, () => {
  console.log(config.PORT);
});
