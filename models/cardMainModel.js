import mongoose from "mongoose";
const { Schema, model } = mongoose;

const cardMainSchema = new Schema(
  {
    title: {
      type: "string",
      required: true,
      unique: true,
    },
    place: {
      type: "string",
      required: true,
    },
    numberBedRoom: {
      type: Number,
      required: true,
    },
    numberBathRooms: {
      type: Number,
      required: true,
    },

    capacity: {
      type: Number,
      required: true,
    },

    price: {
      type: Number,
      required: true,
    },

    picture: {
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

const CardMain = model("cardMain", cardMainSchema);
export default CardMain;
