import express from "express";
import mongoose from "mongoose";

const app = express();
const dbConnection = "mongodb://localhost:27017/quickchat";
mongoose.connect(dbConnection, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  auth: {
    username: "username",
    password: "password",
  },
  authSource: "admin",
});

app.use(express.json());
app.get("/", (_, res) =>
  res.json({
    message: "Hello, world.",
    db: `MongoDB is ${
      mongoose.connection.readyState === 1 ? "" : "not "
    }connected`,
  })
);

app.listen(3000, () => console.log(`Listening on Port 3000`));
