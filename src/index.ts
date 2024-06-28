import express from "express";
import config from "./config/server/config.services";
import connectDB from "./config/database/db.config";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";
const app = express();

// route
import billRoutes from "./api/routes/bill.routes";
import billDetailsRoutes from "./api/routes/billDetails.routes";
import categoriesRoutes from "./api/routes/categories.routes";
import commentsRoutes from "./api/routes/comments.routes";
import productRoutes from "./api/routes/product.routes";
dotenv.config();
const port = config.PORT;

app.use(cors());
app.use(express.json());

app.use(bodyParser.json());

connectDB();


app.use('/api/v1/bill', billRoutes)

app.use('/api/v1/billDetails', billDetailsRoutes)

app.use('/api/v1/categories', categoriesRoutes)

app.use('/api/v1/comments', commentsRoutes)

app.use('/api/v1/product', productRoutes)

app.get("/", async (req, res) => {
  res.send("hehehe");
});

app.listen(port, () => {
  console.log(port);
});

// app.listen(config.PORT, () => {
//   console.log(config.PORT);
// });
