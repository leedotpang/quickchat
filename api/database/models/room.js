import mongoose from "mongoose";
const { Schema, model } = mongoose;

const RoomSchema = new Schema(
  {
    name: { type: String, required: true, unique: true },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

RoomSchema.virtual("messages", {
  ref: "Message",
  localField: "_id",
  foreignField: "roomId",
});

export default model("Room", RoomSchema);
