import { Schema, model } from "mongoose";

const rentPropertySchema = new Schema(
  {
    image: {
      type: String,
      required: true,
    },
    title: {
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
  { collection: "RentProperty", timestamps: true }
);
const RentProperty = model("rentProperty", rentPropertySchema);
export default RentProperty;
