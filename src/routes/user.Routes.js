import { Router } from "express";
import { getUsers } from "../controllers/user.Controller.js";

const userRouter = Router();

userRouter.get("/", getUsers);

export default userRouter;
