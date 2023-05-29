import express from "express";
import controller from "../controllers/buyPropertyController.js";
import uploadImage from "../middleware/image.js";
const router = express.Router();
import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";
router.get("/getOnlyFour", controller.getFourBuyPropertiesOnly);
router.get("/", controller.getAllBuyProperties);

router.get("/byId/:id", controller.getBuyPropertyById);
router.get("/title/:title", controller.getBuyPropertyByTitle);
// router.get("/subcategory/:id", controller.getCategory);
router.post("/", uploadImage, controller.addBuyProperty);
router.put(
  "/:id",
  verifyToken,
  isGeneralAdmin,
  uploadImage,
  controller.editBuyProperty
);
router.delete(
  "/:id",
  verifyToken,
  isGeneralAdmin,
  controller.deleteBuyProperty
);
export default router;
