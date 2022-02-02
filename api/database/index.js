import mongoose from "mongoose";

const dbConnection = "mongodb://localhost/quickchat";

const connectToDB = () =>
  mongoose.connect(dbConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
      username: "username",
      password: "password",
    },
    authSource: "admin",
  });

export default connectToDB;
