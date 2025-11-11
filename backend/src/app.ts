import express from "express";
import post from "./routes/post";

const app = express();

app.use("/post", post);

export default app;
