import { Router } from "express";
import {
  createPost,
  deletePostById,
  getAllPosts,
  getMyPosts,
  updatePostById,
} from "../controllers/post.Controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";
const postRouter = Router();

postRouter.post("/", auth, createPost);
postRouter.delete("/:id", deletePostById);
postRouter.put("/:id", updatePostById);
postRouter.get("/own", auth, getMyPosts);
postRouter.get("/", auth, isSuperAdmin, getAllPosts);

export default postRouter;
