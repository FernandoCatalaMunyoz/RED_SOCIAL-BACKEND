import jwt from "jsonwebtoken";

export const getUsers = async (req, res) => {
  try {
    const userId = req.tokenData.userId;

    console.log(userId);

    res.status(201).json({
      succes: true,
      message: "Users retrieved succesfully",
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Users cant be retrieved",
    });
  }
};
