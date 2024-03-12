import { Router } from "express";
import authRouter from "./auth.Routes.js";
import userRouter from "./user.Routes.js";
import postRouter from "./post.Routes.js";

const router = Router();

router.use("/auth", authRouter);
router.use("/users", userRouter);
router.use("/post", postRouter);
app.use("/api/healthy", (req, res) => {
  res.status(200).json({
    succes: true,
    message: "Server is healthy",
  });
});
export default router;
