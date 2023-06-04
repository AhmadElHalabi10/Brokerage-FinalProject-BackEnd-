import { Schema, model } from "mongoose";

const buyPropertySchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    place: {
      type: String,
      required: true,
    },
    numberBedRoom: {
      type: Number,
      required: true,
    },
    numberBathRooms: {
      type: String,
      require: true,
    },
    capacity: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      require: true,
    },
  },
  { collection: "BuyProperty", timestamps: true }
);
const BuyProperty = model("buyProperty", buyPropertySchema);
export default BuyProperty;
