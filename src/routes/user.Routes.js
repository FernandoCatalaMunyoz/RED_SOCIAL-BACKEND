import { Router } from "express";
import { getProfile, getUsers } from "../controllers/user.Controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";

const userRouter = Router();

userRouter.get("/", auth, isSuperAdmin, getUsers);
userRouter.get("/profile", auth, getProfile);

export default userRouter;
