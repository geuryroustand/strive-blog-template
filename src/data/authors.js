import express from "express";

const authorRouter = express.Router();

authorRouter.get((req, res) => {
  res.send("get working");
});

export default authorRouter;
