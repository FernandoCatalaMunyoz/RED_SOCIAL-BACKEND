// funcion crear post

import Post from "../models/Post.js";

export const createPost = async (req, res) => {
  try {
    const description = req.body.description;
    const ownerId = req.tokenData.userId;

    const newPost = await Post.create({
      description: description,
      ownerId: ownerId,
    });

    res.status(200).json({
      success: true,
      message: "Post created succesfully",
      data: newPost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post cant be created",
      error: error,
    });
  }
};
