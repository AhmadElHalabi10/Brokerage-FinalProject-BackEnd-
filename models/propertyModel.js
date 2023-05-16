import { Schema, model } from "mongoose";

const propertySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    picture: {
      type: String,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    features: {
      type: String,
      require: true,
    },
    cost: {
      type: Number,
      require: true,
    },
    category_Id: {
      type: Schema.Types.ObjectId,
      ref: "category",
    },
    message_Id: {
      type: Schema.Types.ObjectId,
      ref: "message",
    },
    status: {
      type: String,
      require: true,
      default: "buy",
    },
  },
  { collection: "Property", timestamps: true }
);
propertySchema.pre(["find", "findOne"], function () {
  this.populate("category");
});
propertySchema.pre(["find", "findOne"], function () {
  this.populate("message");
});
const Property = model("property", propertySchema);
export default Property;
