import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import cors from "cors";

import adminRoute from "./routes/adminRoute.js";
import aboutUsRoute from "./routes/aboutUsRoute.js";
import buyPropertyRoute from "./routes/buyPropertyRoute.js";
import rentPropertyRoute from "./routes/rentPropertyRoute.js";

import categoryRoute from "./routes/categoryRoute.js";
import reviewRoute from "./routes/reviewRoute.js";
import messageRoute from "./routes/messageRoute.js";
import offerRoute from "./routes/offerRoute.js";

import cardMainRoute from "./routes/cardMainRoute.js";

dotenv.config();
await connectDB();

const PORT = process.env.PORT || 3000;

const app = new express();

if (process.env.NODE_ENV === "development") {
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
app.use("/aboutus", aboutUsRoute);
app.use("/buyproperty", buyPropertyRoute);
app.use("/rentproperty", rentPropertyRoute);

app.use("/category", categoryRoute);
app.use("/review", reviewRoute);
app.use("/message", messageRoute);
app.use("/offer", offerRoute);
app.use("/cardMain", cardMainRoute);

app.listen(
  PORT,
  console.log(`Server Running in ${process.env.NODE_ENV} mode on Port ${PORT}`)
);
