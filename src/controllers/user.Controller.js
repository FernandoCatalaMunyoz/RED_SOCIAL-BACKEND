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
    const userId = req.tokenData._id;

    console.log(userId, "userId");

    const user = await User.findById(userId).exec();
    console.log(user, "usuario");

    res.status(201).json({
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

//Funcion modificar perfil

export const updateProfile = async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const nickName = req.body.nickName;
    const email = req.body.email;
    const userId = req.tokenData._id;
    console.log(userId);
    const userUpdated = await User.findOneAndUpdate(
      { _id: userId },
      {
        firstName,
        lastName,
        nickName,
        email,
      }
    ).select("-password");
    console.log(userUpdated, "userUpdated");
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (email) {
      if (!validEmail.test(email)) {
        return res.status(400).json({
          success: false,
          message: "format email invalid",
        });
      }
    }
    console.log(userUpdated, "userUpdated");
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
