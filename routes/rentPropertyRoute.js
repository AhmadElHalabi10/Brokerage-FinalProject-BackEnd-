import express from "express";
import controller from "../controllers/rentPropertyController.js";
import uploadImage from "../middleware/image.js";
const router = express.Router();
import { isGeneralAdmin, verifyToken } from "../middleware/auth.js";
router.get("/getOnlyFour", controller.getFourRentPropertiesOnly);
router.get("/", controller.getAllRentProperties);

router.get("/byId/:id", controller.getRentPropertyById);
router.get("/title/:title", controller.getRentPropertyByTitle);
// router.get("/subcategory/:id", controller.getCategory);
router.post("/", uploadImage, controller.addRentProperty);
router.put(
  "/:id",
  verifyToken,
  isGeneralAdmin,
  uploadImage,
  controller.editRentProperty
);
router.delete(
  "/:id",
  verifyToken,
  isGeneralAdmin,
  controller.deleteRentProperty
);
export default router;
