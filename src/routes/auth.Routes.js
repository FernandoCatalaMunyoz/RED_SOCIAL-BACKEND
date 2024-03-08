import { Router } from "express";
import { login, register } from "../controllers/auth.Controller.js";
import { auth } from "../middlewares/auth.js";

const authRouter = Router();

authRouter.post("/register", register);
authRouter.post("/login", auth, login);

export default authRouter;
