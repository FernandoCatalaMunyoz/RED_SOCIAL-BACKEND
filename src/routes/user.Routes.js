import { Router } from "express";
import { getUsers } from "../controllers/user.Controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";

const userRouter = Router();

userRouter.get("/", auth, isSuperAdmin, getUsers);

export default userRouter;
