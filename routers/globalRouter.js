import express from "express";

const globalRouter = express.Router();

globalRouter.get("/", (req, res) => res.sendStatus(200));
export default globalRouter;
