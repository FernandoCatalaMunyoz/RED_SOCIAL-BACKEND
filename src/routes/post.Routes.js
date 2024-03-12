import { Router } from "express";
import {
  createPost,
  deletePostById,
  updatePostById,
} from "../controllers/post.Controller.js";
import { auth } from "../middlewares/auth.js";

const postRouter = Router();

postRouter.post("/", auth, createPost);
postRouter.delete("/:id", deletePostById);
postRouter.put("/:id", updatePostById);

export default postRouter;
