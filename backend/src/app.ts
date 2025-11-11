import post from "./routes/post";
import express from "express";

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "GISAU Backend API" });
});

app.use("/posts", post);

export default app;
