import express from "express";
import cors from "cors";
// import authorRouter from "./data/authors";
const server = express();

const port = 3001;

// server.use(express.json());

// server.use("/", authorRouter);

server.get("/", (req, res) => {
  res.send("Get post");
});

server.listen(port, () => {
  console.log("Server listing port");
});
