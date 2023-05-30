import express from "express";
import controller from "../controllers/contactUsController.js";
const router = express.Router();
import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";

router.get("/getOnlyFour", controller.getFourContactUsesOnly);
router.get("/", controller.getAllContactUses);
router.get("/byId/:id", controller.getContactUsById);
router.get("/userName/:userName", controller.getContactUsByTitle);
router.post("/", controller.addContactUs);
router.put("/:id", verifyToken, isGeneralAdmin, controller.editContactUs);
router.delete("/:id", verifyToken, isGeneralAdmin, controller.deleteContactUs);
export default router;
