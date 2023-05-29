import express from "express";
const router = express.Router();
import {
  createCardMain,
  getCardMain,
  getCardMains,
  editCardMain,
  deleteCardMain,
} from "../controllers/cardMainController.js";
import uploadImage from "../middleware/image.js";
import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";

router.post("/", uploadImage, createCardMain);
router.get("/:id", getCardMain);
router.get("/", getCardMains);
router.patch("/:id", verifyToken, isGeneralAdmin, uploadImage, editCardMain);
router.delete("/:id", verifyToken, isGeneralAdmin, deleteCardMain);
export default router;
