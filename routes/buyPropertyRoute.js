import express from "express";
import controller from "../controllers/buyPropertyController.js";
const router = express.Router();
import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";
router.get("/getOnlyFour", controller.getFourBuyPropertiesOnly);
router.get("/", controller.getAllBuyProperties);

router.get("/byId/:id", controller.getBuyPropertyById);
router.get("/title/:title", controller.getBuyPropertyByTitle);
router.post("/", controller.addBuyProperty);
router.put(
  "/:id",
  verifyToken,
  isGeneralAdmin,

  controller.editBuyProperty
);
router.delete(
  "/:id",
  verifyToken,
  isGeneralAdmin,
  controller.deleteBuyProperty
);
export default router;
