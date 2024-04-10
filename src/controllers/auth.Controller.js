import bcrypt from "bcrypt";
import User from "../models/User.js";

import jwt from "jsonwebtoken";

//Funcion Register
export const register = async (req, res) => {
  try {
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const nickName = req.body.nickName;
    const email = req.body.email;
    const password = req.body.password;

    if (password.length < 6 || password.length > 10) {
      return res.status(400).json({
        success: false,
        message: "Password must contain between 6 and 10 characters",
      });
    }

    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "format email invalid",
      });
    }
    const passwordEncrypted = bcrypt.hashSync(password, 5);

    const user = await User.findOne({
      nickName: nickName,
    });

    if (!user) {
      const newUser = await User.create({
        firstName: firstName,
        lastName: lastName,
        nickName: nickName,
        email: email,
        password: passwordEncrypted,
      });

      res.status(201).json({
        success: true,
        message: "User registered succesfully",
        firstName,
        nickName,
        email,
      });
    }
    res.status(201).json({
      success: false,
      message: "Nickname in use, select other",
      firstName,
      nickName,
      email,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User cant be registered",
      error: error,
    });
  }
};

//Funcion Login
export const login = async (req, res) => {
  try {
    const email = req.body.email;
    const password = req.body.password;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "email and password are mandatories",
      });
    }
    const validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!validEmail.test(email)) {
      return res.status(400).json({
        success: false,
        message: "Email format is not valid",
      });
    }
    const user = await User.findOne({
      email: email,
    });

    if (!user) {
      res.status(400).json({
        success: false,
        message: "Email or password invalid",
      });
    }

    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return res.status(400).json({
        success: false,
        message: "Email or password invalid",
      });
    }

    const token = jwt.sign(
      {
        _id: user._id,
        nickName: user.nickName,
        firstName: user.firstName,
        lastName: user.lastName,
        roleName: user.role,
        email: user.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "200h",
      }
    );

    res.status(200).json({
      success: true,
      message: "User logged succesfully",
      token: token, //MOSTRAMOS EL TOKEN DE MANERA TEMPORAL PARA PODER PROBAR CON ÉL OTRA FUNCIONALIDADES
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "User cant be logged",
      error: error,
    });
  }
};
