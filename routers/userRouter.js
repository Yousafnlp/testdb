import express from "express";
import {
  SearchUsers,
  controller,
  deleteForm,
  find_user_id,
  getForm,
  saveForm,
  updateForm,
  loginUser,
  yesAdmin,
  uploadImg,
  upload,
} from "../controllers/userController.js";
import {
  find_product_id,
  getProducts,
  send_products,
  setProducts,
} from "../controllers/ProductControllers.js";
import { isAdmin, requireSignIn } from "../middleware/authMiddle.js";

const router = express.Router();

// const upload = multer({ dest: 'uploads/' })

router.get("/hello", controller);
router.post("/register", saveForm);
router.get("/user-data", getForm);
router.delete("/DeleteUser/:id", deleteForm);
router.get("/get-User-data/:id", find_user_id);
router.put("/update-user/:id", updateForm);
router.get("/search/:key", SearchUsers);
router.post("/login", loginUser);
router.get("/admin", requireSignIn, isAdmin, yesAdmin);

// Products route
router.post("/setProducts", setProducts);
router.get("/get_Products", getProducts);
router.get("/SingleProduct/:id", find_product_id);
router.post("/postOrder", send_products);

router.post("/upload", upload.single("img"), uploadImg)

export default router;
