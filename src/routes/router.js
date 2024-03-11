import { Router } from "express";
import authRouter from "./auth.Routes.js";
import userRouter from "./user.Routes.js";
import postRouter from "./post.Routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/post", postRouter);
export default router;
