import mongoose from "mongoose";
import { Schema } from "mongoose";
import { IUser } from "../types/user.dto";
import { statusSex, statusUser, roleUser } from "../../contans/enum/user/user";

const userSchema = new Schema<IUser>({
  _id: { type: String, required: true },
  username: { type: String, required: true },
  password: { type: String, required: true },
  full_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: Number, required: true },
  status: {
    type: Number,
    enum: [statusUser.INACTIVE, statusUser.ACTIVE],
    default: statusUser.INACTIVE,
    required: true,
  },
  sex: {
    type: Number,
    enum: [statusSex.FEMALE, statusSex.MALE, statusSex.OTHER],
    required: true,
  },
  // image: { type: String, default: '', required: true },
  role: {
    type: String,
    enum: [roleUser.ADMIN, roleUser.USER],
    default: roleUser.USER,
    required: true,
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
});

const User = mongoose.model<IUser>("User", userSchema);
export default User;
