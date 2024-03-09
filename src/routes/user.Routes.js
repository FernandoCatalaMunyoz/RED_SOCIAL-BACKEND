import { Router } from "express";
import { getUsers } from "../controllers/user.Controller.js";
import { auth } from "../middlewares/auth.js";

const userRouter = Router();

userRouter.get("/", auth, getUsers);

export default userRouter;
