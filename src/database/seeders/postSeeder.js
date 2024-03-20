import "dotenv/config";
import { dbConection, dbDisconection } from "../db.js";
import Post from "../../models/Post.js";
import { faker } from "@faker-js/faker";

const postsSeedDatabase = async () => {
  try {
    await dbConection();
    const randomTitle = faker.lorem.sentence({ min: 1, max: 5 });
    const randomDescription = faker.lorem.sentence({ min: 1, max: 100 });

    const generateFakePosts = () => {
      const post = new Post();
      post.title = randomTitle;
      post.description = randomDescription;
      post.ownerId = "65faacc04c1af97fe2f7fab8";
    };
    const fakePosts = Array.from({ length: 15 }, generateFakePosts);
    await Post.save(fakePosts);
  } catch (error) {
    console.log(error);
  } finally {
    await dbDisconection;
  }
};
