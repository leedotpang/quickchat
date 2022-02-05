import mongoose from "mongoose";

const dbConnection = "mongodb://mongo/quickchat";

const connectToDB = () =>
  mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

export default connectToDB;
