import express from "express";

const router = express.Router();

// get all posts
router.get("/", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

export default router;
