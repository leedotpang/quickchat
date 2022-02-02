import { Router } from "express";
import { Message } from "../database/models/index.js";

const router = Router();

const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ roomId: req.params.roomId }).limit(
      50
    );
    res.json({ messages });
  } catch (err) {
    res.status(500).send({
      message: "There was an error retrieving those messages.",
      err,
    });
  }
};

const createMessage = async (req, res) => {
  try {
    const message = await Message.create({
      text: req.body.text,
      username: req.body.username,
      roomId: req.body.roomId,
    });
    res.json({ message });
  } catch (err) {
    res.status(500).send({
      message: "There was an error sending that message.",
      err,
    });
  }
};

router.get("/:roomId", getMessages);
router.post("/", createMessage);

export default router;
