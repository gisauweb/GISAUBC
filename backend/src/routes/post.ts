import express from "express";

const router = express.Router();

// get all posts
router.get("/", async () => {
  console.log("Ad");
});

export default router;
