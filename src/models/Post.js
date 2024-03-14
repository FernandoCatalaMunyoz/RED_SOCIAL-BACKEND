import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    description: {
      type: String,
      required: false,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    likes: [
      {
        type: Schema.Types.ObjectId,
        ref: "User",
        required: false,
      },
    ],
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

const Post = model("Post", PostSchema);
export default Post;
