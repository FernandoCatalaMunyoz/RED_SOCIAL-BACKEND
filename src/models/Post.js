import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    description: {
      type: String,
      required: false,
    },
    ownerId: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Post = model("Post", PostSchema);
export default Post;
