import cors from "cors";
import "dotenv/config";
import express from "express";
import post from "./api/post.route.js";
import user from "./api/user.route.js";

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
app.use("/posts", post);
app.use("/users", user);

app.get("/", (req, res) => {
  res.json({ message: "GISAU Backend API" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
