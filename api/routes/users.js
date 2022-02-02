import { Router } from "express";
import { User } from "../database/models/index.js";

const router = Router();

const register = async (req, res) => {
  try {
    const user = await User.create({ username: req.body.username });
    res.json({ user });
  } catch (err) {
    res.status(500).send({
      message: "There was an error creating that user.",
      err,
    });
  }
};

const login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });

    if (user.length < 1) throw { error: "User doesn't exist" };

    res.json({ user });
  } catch (err) {
    res.status(500).send({
      message: "There was an error retrieving user.",
      err,
    });
  }
};

router.post("/register", register);
router.post("/login", login);

export default router;
