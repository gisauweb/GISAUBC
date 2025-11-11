// import post from "./routes/post";
import express from "express";

const app = express();

// app.use("/post", post);

app.get("/posts", (req, res) => {
  res.json({ message: "Hello from Express on Vercel!" });
});

export default app;
