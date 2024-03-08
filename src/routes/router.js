import { Router } from "express";
import authRouter from "./auth.Routes.js";

const router = Router();

router.use("/auth", authRouter);
export default router;
