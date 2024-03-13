import "dotenv/config";
import { dbConection, dbDisconection } from "../db.js";
import User from "../../models/User.js";
import { faker } from "@faker-js/faker";

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

    await dbConection();
    const admin = new User();
    admin.name = "admin";
    admin.email = "admin@admin.com";
    admin.password = bcrypt.hashSync("123456", 8);
    admin.role = "admin";
    await admin.save();

    await dbConection();
    const super_admin = new User();
    super_admin.name = "super_admin";
    super_admin.email = "super_admin@super_admin.com";
    super_admin.password = bcrypt.hashSync("123456", 8);
    super_admin.role = "super_admin";
    await super_admin.save();

    await dbConection();
    const generateFakeUser = () => {
      const user = new User();
      user.name = faker.person.fullName();
      user.email = faker.internet.email();
      user.password = bcrypt.hashSync("123456", 8);
      user.role = "user";

      return user;
    };

    const fakeUsers = Array.from({ length: 15 }, generateFakeUser);
    await User.save(fakeUsers);
  } catch (error) {
  } finally {
    await dbDisconection();
  }
};

const startSeeder = async () => {
  await userSeedDatabase();
};
startSeeder();
