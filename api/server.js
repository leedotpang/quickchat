import express from "express";
import connectToDB from "./database/index.js";
import { messageRoute, roomRoute, userRoute } from "./routes/index.js";

const app = express();

connectToDB();

app.use(express.json());

app.get("/", (_, res) =>
  res.json({ message: "Route intentionally left blank." })
);

app.use("/messages", messageRoute);
app.use("/rooms", roomRoute);
app.use("/users", userRoute);

app.listen(3000, () => console.log(`Listening on Port 3000`));
