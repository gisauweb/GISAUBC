import express from "express";
import post from "./routes/post";

const app = express();
const port = process.env.PORT || 8000;

app.use("/post", post);

if (process.env.NODE_ENV !== "production") {
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

export default app;
