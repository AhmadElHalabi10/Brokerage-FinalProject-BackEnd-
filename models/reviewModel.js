import { Schema, model } from "mongoose";

const reviewSchema = new Schema(
  {
    message: {
      type: "string",
      required: true,
    },
    rating: {
      type: "number",
      enum: [1, 2, 3, 4, 5],
    },
    email: {
      type: "string",
      required: true,
    },
    phoneNumber: {
      type: "string",
      required: true,
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
const review = model("review", reviewSchema);
export default review;
