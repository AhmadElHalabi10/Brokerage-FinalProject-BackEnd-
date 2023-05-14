import { Schema, model } from "mongoose";

const aboutUsSchema = new Schema({
  facebook: {
    type: String,
    required: true,
  },
  instagram: {
    type: String,
    required: true,
  },
  whatsapp: {
    type: String,
    required: true,
  },
  maps: {
    type: String,
    required: true,
  },
});
const aboutUs = model("aboutUs", aboutUsSchema);
export default aboutUs;
