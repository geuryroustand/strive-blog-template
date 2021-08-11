import express from "express";
import cors from "cors";
import authorRouter from "../src/data/authors.js";
const server = express();

const port = 3001;

// server.use(cors());
server.use(express.json());

server.use("/authors", authorRouter);

server.listen(port, () => {
  console.log("Server listing port");
});
