import jwt from "jsonwebtoken";
import mongoose from "mongoose";
import User from "../models/User.js";

//ver todos los usuarios
export const getUsers = async (req, res) => {
  try {
    const users = await User.find({}, "-password").exec();

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

// ver perfil
export const getProfile = async (req, res) => {
  try {
    const userId = req.tokenData.userId;

    const user = await User.findById(userId).exec();

    res.status(200).json({
      succes: true,
      message: "Profile retrieved succesfully",
      data: user,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "Profile cant be retrieved",
    });
  }
};

// modificar perfil

export const updateProfile = async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const userId = req.tokenData.userId;
    const filter = { _id: userId };

    const userUpdated = await User.findByIdAndUpdate(
      userId,
      {
        name: name,
        email: email,
      },
      { new: true }
    );

    res.status(200).json({
      succes: true,
      message: "User updated",
      data: userUpdated,
    });
  } catch (error) {
    res.status(500).json({
      succes: false,
      message: "User cant be updated",
    });
  }
};
