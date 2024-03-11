// funcion crear post

export const createPost = async (req, res) => {
  try {
    res.status(200).json({
      success: true,
      message: "Post created succesfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Post cant be created",
      error: error,
    });
  }
};
