import { Schema, model } from "mongoose";

const adminSchema = new Schema(
  {
    userName: {
      type: String,
      required: true,
      unique: "user name must be unique",
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      minlength: 6,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
    },
    role: {
      type: String,
      default: "admin",
    },
  },
  { collection: "Admin", timestamps: true }
);
const Admin = model("Admin", adminSchema);
export default Admin;
