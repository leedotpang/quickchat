import mongoose from "mongoose";
const { Schema, model } = mongoose;

const MessageSchema = new Schema(
  {
    roomId: { type: String, required: true },
    text: { type: String, required: true },
    username: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

export default model("Message", MessageSchema);
