import express from "express";

const router = express.Router();

// get all users
router.get("/", (req, res) => {
  try {
    res.json({ message: "Sucessful!" });
  } catch {
    res.json({ message: "Error" });
  }
});

export default router;
