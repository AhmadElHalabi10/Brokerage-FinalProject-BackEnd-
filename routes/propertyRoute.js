import express from "express";
import controller from "../controllers/propertyController.js";
import uploadImage from "../middleware/image.js";
const router = express.Router();
import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";
router.get("/getOnlyFour", controller.getFourPropertyOnly);

router.get("/byId/:id", controller.getPropertyById);
router.get("/:name", controller.getByName);
// router.get("/subcategory/:id", controller.getCategory);
router.post("/", uploadImage, controller.addProperty);
router.put(
  "/:id",
  verifyToken,
  isGeneralAdmin,
  uploadImage,
  controller.editProperty
);
router.delete("/:id", verifyToken, isGeneralAdmin, controller.deleteProperty);
export default router;
