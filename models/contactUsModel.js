import { Schema, model } from "mongoose";

const contactUsSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      require: true,
    },
  },
  { collection: "ContactUs", timestamps: true }
);
const ContactUs = model("contactUs", contactUsSchema);
export default ContactUs;
