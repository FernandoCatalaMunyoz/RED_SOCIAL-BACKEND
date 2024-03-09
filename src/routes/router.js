import { Router } from "express";
import authRouter from "./auth.Routes.js";
import userRouter from "./user.Routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
export default router;
