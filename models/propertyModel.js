import { Schema, model } from "mongoose";

const propertySchema = new Schema(
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
    // category_Id: {
    //   type: Schema.Types.ObjectId,
    //   ref: "category",
    // },
    // message_Id: {
    //   type: Schema.Types.ObjectId,
    //   ref: "message",
    // },
    // status: {
    //   type: String,
    //   require: true,
    //   default: "buy",
    // },
  },
  { collection: "Property", timestamps: true }
);
// propertySchema.pre(["find", "findOne"], function () {
//   this.populate("category");
// });
// propertySchema.pre(["find", "findOne"], function () {
//   this.populate("message");
// });
const Property = model("property", propertySchema);
export default Property;
