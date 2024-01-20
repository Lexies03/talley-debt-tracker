const express = require("express");
const userRouter = express.Router();

const {
  getUser,
  registerUser,
  deleteUser,
  updateUser,
} = require("../controller/user.controller");

userRouter.get("/", getUser);
userRouter.post("/", registerUser);
userRouter.delete("/:id", deleteUser);
userRouter.put("/:id", updateUser);

module.exports = userRouter;
