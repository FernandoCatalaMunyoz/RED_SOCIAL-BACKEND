import { Router } from "express";
import {
  createPost,
  deletePostById,
  getAllPosts,
  getMyPosts,
  getPostById,
  getUserPosts,
  likeUnlike,
  updatePostById,
} from "../controllers/post.Controller.js";
import { auth } from "../middlewares/auth.js";
import { isSuperAdmin } from "../middlewares/isSuperAdmin.js";
const postRouter = Router();

postRouter.post("/", auth, createPost);
postRouter.delete("/:id", auth, deletePostById);
postRouter.put("/:id", auth);
postRouter.get("/own", auth, getMyPosts);
postRouter.get("/", auth, isSuperAdmin, getAllPosts);
postRouter.get("/:id", auth, isSuperAdmin, getPostById);
postRouter.get("/user/:id", getUserPosts);
postRouter.put("/:id", auth, updatePostById);
postRouter.put("/like/:id", auth, likeUnlike);

export default postRouter;
