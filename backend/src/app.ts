import cors from "cors";
import "dotenv/config";
import express, { Router } from "express";
import auth from "./api/auth.route.js";
import post from "./api/post.route.js";

const app = express();
const port = process.env.PORT || 3000;

app.use(
  cors({
    origin: `${process.env.CLIENT_ORIGIN}`, // must match your frontend URL exactly
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    credentials: true, // if you use cookies or auth
  })
);

app.use(express.json());

const api = Router();
api.use("/posts", post);
api.use("/auth", auth);

app.use("/api/v1", api);

app.get("/", (req, res) => {
  res.json({ message: "GISAU Backend API" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
