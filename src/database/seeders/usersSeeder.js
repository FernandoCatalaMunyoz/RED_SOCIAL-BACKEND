import "dotenv/config";
import { dbConection, dbDisconection } from "../db.js";
import User from "../../models/User.js";

import bcrypt from "bcrypt";

const userSeedDatabase = async () => {
  try {
    await dbConection();
    const user = new User();
    user.name = "user";
    user.email = "user@user.com";
    user.password = bcrypt.hashSync("123456", 8);
    user.role = "user";
    await user.save();

    const admin = new User();
    admin.name = "admin";
    admin.email = "admin@admin.com";
    admin.password = bcrypt.hashSync("123456", 8);
    admin.role = "admin";
    await admin.save();

    const super_admin = new User();
    super_admin.name = "super_admin";
    super_admin.email = "super_admin@super_admin.com";
    super_admin.password = bcrypt.hashSync("123456", 8);
    super_admin.role = "super_admin";
    await super_admin.save();
  } catch (error) {
    console.log(error);
  } finally {
    await dbDisconection();
  }
};

const startSeeder = async () => {
  await userSeedDatabase();
};
startSeeder();
