import express from "express";
import { add_post } from "../db/crud/post.js";

const router = express.Router();

// get all users
router.get("/", (req, res) => {
  try {
    add_post(); 
    res.json({ message: "Sucessful!" });
  } catch {
    res.json({ message: "Error" });
  }
});

export default router;
