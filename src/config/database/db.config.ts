import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const connectDB = async () => {
  const connectWithRetry = async () => {
    try {
      await mongoose.connect(
        `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@huy-ecommerce-shop.ve2yz7t.mongodb.net/?retryWrites=true&w=majority&appName=Huy-Ecommerce-Shop`,

        {
          serverSelectionTimeoutMS: 5000,
          socketTimeoutMS: 45000,
        }
      );
      console.log("Connect MongoDB successfully");
    } catch (error) {
      console.log("Connect MongoDB Failed" + error);
      console.log("Retrying to connect to MongoDB in 5 seconds...");
      setTimeout(connectWithRetry, 5000);
    }
  };

  connectWithRetry();
};
mongoose.connection.on("error", (error) => {
  console.log("MongoDB connection error: " + error);
});

export default connectDB;
