import "dotenv/config";
import { dbConection, dbDisconection } from "../db.js";
import User from "../../models/User.js";
import Post from "../../models/Post.js";
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
    console.log("users created");
  } catch (error) {
    console.log(error);
  } finally {
    await dbDisconection();
  }
};
const postsSeedDatabase = async () => {
  try {
    await dbConection();

    const generateFakePosts = () => {
      const post = new Post();
      post.title = faker.lorem.sentence({ min: 1, max: 5 });
      post.description = faker.lorem.sentence({ min: 1, max: 100 });
      post.ownerId = "65faacc04c1af97fe2f7fab8";
      return post;
    };
    const fakePosts = Array.from({ length: 5 }, generateFakePosts);
    await Post.create(fakePosts);
  } catch (error) {
    console.log(error);
  } finally {
    await dbDisconection;
  }
};
const startSeeder = async () => {
  await userSeedDatabase();
  await postsSeedDatabase();
};
startSeeder();
