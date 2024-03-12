import Post from "../models/Post.js";

// funcion crear post
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

// funcion borrar post por id

export const deletePostById = async (req, res) => {
  try {
    const postId = req.body.postId;
    const deletePost = await Post.findByIdAndDelete(postId);

    res.status(200).json({
      success: true,
      message: "Post deleted succesfully",
      data: deletePost,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post cant be deleted",
      error: error,
    });
  }
};

export const updatePostById = async (req, res) => {
  try {
    const description = req.body.description;
    const postId = req.params.id;

    const postUpdated = await Post.findByIdAndUpdate(
      postId,
      {
        description: description,
      },
      { new: true }
    );

    res.status(200).json({
      success: true,
      message: "Post updated succesfully",
      data: postUpdated,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post cant be updated",
      error: error,
    });
  }
};

export const getMyPosts = async (req, res) => {
  try {
    const userId = req.tokenData.userId;

    const myPosts = await Post.find({ ownerId: userId }).exec();

    res.status(200).json({
      success: true,
      message: "Post retrieved succesfully",
      data: myPosts,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post cant be retrieved",
      error: error,
    });
  }
};
