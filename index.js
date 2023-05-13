import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

import adminRoute from "./routes/adminRoute.js";

dotenv.config();
await connectDB();

const PORT = process.env.PORT || 3000;

const app = new express();

if (process.env.NODE_ENV === "master") {
  app.use(morgan("dev"));
}

app.use(express.json());
app.use("/uploads", express.static("uploads"));

app.use(bodyParser.json());
app.use(cookieParser());

app.get("/", (req, res) => {
  res.send("API is running ...");
});

app.use(cors());
app.use("/auth", adminRoute);

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
