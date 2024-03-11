import { Router } from "express";
import { createPost } from "../controllers/post.Controller.js";

const postRouter = Router();

postRouter.post("/", createPost);

export default postRouter;
