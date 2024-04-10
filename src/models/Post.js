import { Schema, model } from "mongoose";

const PostSchema = new Schema(
  {
    title: {
      type: String,
      required: false,
    },

    description: {
      type: String,
      required: false,
    },
    photo: {
      type: String,
      required: false,
    },
    ownerId: {
      type: Schema.Types.ObjectId,
      required: false,
    },
    ownerName: {
      type: String,
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
