import { Router } from "express";
import { Room } from "../database/models/index.js";

const router = Router();

const getRooms = async (req, res) => {
  try {
    const rooms = await Room.find();
    res.json({ rooms });
  } catch (err) {
    res.status(500).send({
      message: "There was an error retrieving rooms.",
      err,
    });
  }
};

const createRoom = async (req, res) => {
  try {
    const room = await Room.create({ name: req.body.name });
    res.json({ room });
  } catch (err) {
    res.status(500).send({
      message: "There was an error creating that room.",
      err,
    });
  }
};

router.get("/", getRooms);
router.post("/", createRoom);

export default router;
