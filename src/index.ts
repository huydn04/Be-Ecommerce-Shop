import express from "express";
import config from "./config/server/config.services";

const app = express();
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("hehehe");
});

app.listen(config.PORT, () => {
  console.log(config.PORT);
});
