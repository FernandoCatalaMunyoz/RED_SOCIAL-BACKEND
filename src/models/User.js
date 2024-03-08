import { Schema, model } from "mongoose";
//Crear nuevo Schema

const UserSchema = new Schema(
  {
    name: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      enum: ["user", "admin", "super_admin"],
      default: "user",
    },
  },
  {
    timestamps: true, //campos created at y updated at
    versionKey: false, // ponemos false para queno salga
  }
);
//transformar el Schema en modelo
const User = model("User", UserSchema);
//exportamos el modelo
export default User;
