import mongoose, { Document, Schema } from "mongoose";
import connectDB from "../db";

export interface ITranslation extends Document {
  timestamp: Date;
  fromText: string;
  from: string;
  to: string;
  toText: string;
}

interface IUser extends Document {
  userId: string;
  translations: Array<ITranslation>;
}

const translationSchema = new Schema<ITranslation>({
  timestamp: { type: Date, default: Date.now },
  fromText: String,
  from: String,
  to: String,
  toText: String,
});

const userSchema = new Schema<IUser>({
  userId: String,
  translations: [translationSchema],
});

const User = mongoose.models.User || mongoose.model<IUser>("User", userSchema);
