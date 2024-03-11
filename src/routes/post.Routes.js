import { Router } from "express";
import { createPost } from "../controllers/post.Controller.js";
import { auth } from "../middlewares/auth.js";

const postRouter = Router();

postRouter.post("/", auth, createPost);

export default postRouter;
