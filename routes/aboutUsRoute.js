import express from "express";
const aboutUsRoute = express.Router();

import {
  getMaps,
  getMap,
  addMap,
  updateMap,
  deleteMap,
  getFacebook,
  addFacebook,
  updateFacebook,
  deleteFacebook,
  getInstagram,
  addInstagram,
  updateInstagram,
  deleteInstagram,
  getWhatsapp,
  addWhatsapp,
  updateWhatsapp,
  deleteWhatsapp,
} from "../controllers/aboutUsController.js";

import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";

aboutUsRoute.get("/", getMaps);

// Routes for maps
aboutUsRoute.get("/:id", getMap);
aboutUsRoute.post("/", verifyToken, isGeneralAdmin, addMap);
aboutUsRoute.put("/:id", verifyToken, isGeneralAdmin, updateMap);
aboutUsRoute.delete("/:id", verifyToken, isGeneralAdmin, deleteMap);

// Routes for Facebook icon
aboutUsRoute.get("/:id", getFacebook);
aboutUsRoute.post("/", verifyToken, isGeneralAdmin, addFacebook);
aboutUsRoute.put("/:id", verifyToken, isGeneralAdmin, updateFacebook);
aboutUsRoute.delete("/:id", verifyToken, isGeneralAdmin, deleteFacebook);

// Routes for Instagram icon
aboutUsRoute.get("/:id", getInstagram);
aboutUsRoute.post("/", verifyToken, isGeneralAdmin, addInstagram);
aboutUsRoute.put("/:id", verifyToken, isGeneralAdmin, updateInstagram);
aboutUsRoute.delete("/:id", verifyToken, isGeneralAdmin, deleteInstagram);

// Routes for WhatsApp icon
aboutUsRoute.get("/:id", getWhatsapp);
aboutUsRoute.post("/", verifyToken, isGeneralAdmin, addWhatsapp);
aboutUsRoute.put("/:id", verifyToken, isGeneralAdmin, updateWhatsapp);
aboutUsRoute.delete("/:id", verifyToken, isGeneralAdmin, deleteWhatsapp);

export default aboutUsRoute;
