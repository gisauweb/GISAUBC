import express from "express";
import post from "./routes/post";

const app = express();
const port = 8000;

app.use("/post", post);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
