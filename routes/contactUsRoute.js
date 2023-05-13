import express from "express";
const router = express.Router();
import {
  createContact,
  getAllContacts,
  getContact,
  deleteContact,
  editContact,
} from "../controllers/contactUsController.js";

import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";

router.post("/", createContact);
router.get("/", verifyToken, isGeneralAdmin, getAllContacts);
router.get("/:id", verifyToken, isGeneralAdmin, getContact);
router.delete("/:id", verifyToken, isGeneralAdmin, deleteContact);
router.patch("/:id", verifyToken, isGeneralAdmin, editContact);

export default router;
