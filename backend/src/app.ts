import express from "express";
import post from "./routes/post.js";
import user from "./routes/user.js";

const app = express();
const port = process.env.PORT || 3000;

app.use("/posts", post);
app.use("/users", user);

app.get("/", (req, res) => {
  res.json({ message: "GISAU Backend API" });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

export default app;
