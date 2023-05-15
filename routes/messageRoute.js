import express from "express";
const router = express.Router();
import {
  createMessage,
  getMessages,
  getMessage,
  deleteMessage,
  editMessage,
} from "../controllers/messageController.js";

import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";

router.post("/", createMessage);
router.get("/", verifyToken, isGeneralAdmin, getMessages);
router.get("/:id", verifyToken, isGeneralAdmin, getMessage);
router.delete("/:id", verifyToken, isGeneralAdmin, deleteMessage);
router.patch("/:id", verifyToken, isGeneralAdmin, editMessage);

export default router;
