import jwt from "jsonwebtoken";
import User from "../models/User.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).select("-password").exec();

    res.status(201).json({
      succes: true,
      message: "Users retrieved succesfully",
      data: users,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Users cant be retrieved",
    });
  }
};
