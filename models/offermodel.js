import mongoose from "mongoose";
const { Schema, model } = mongoose;

const offerSchema = new Schema(
  {
    Name: {
      type: "string",
      required: true,
      unique: true,
    },
    startingDate: {
      type: "date",
      required: true,
    },
    endingDate: {
      type: "date",
      required: true,
    },
    percentage: {
      type: "number",
      required: true,
    },
    property: [
      {
        type: Schema.Types.ObjectId,
        ref: "property",
      },
    ],
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
);
offerSchema.pre(["find", "findOne"], function () {
  this.populate(["property"]);
});
const Offer = model("Offer", offerSchema);
export default Offer;
