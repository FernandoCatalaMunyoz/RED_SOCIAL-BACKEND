import { Router } from "express";
import {
  getProfile,
  getUsers,
  updateProfile,
} from "../controllers/user.Controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";

const userRouter = Router();

userRouter.get("/", auth, isSuperAdmin, getUsers);
userRouter.get("/profile", auth, getProfile);
userRouter.put("/profile", auth, updateProfile);

export default userRouter;
