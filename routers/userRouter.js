import express from "express";

const userRouter = express.Router();

userRouter.get("/", (req, res) => res.send("User Home"));
export default userRouter;
