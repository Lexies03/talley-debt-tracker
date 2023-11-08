const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

//routers
const userRouter = require("./router/user.router");

const app = express();
const PORT = process.env.PORT || 9000;

app.use(express.json);
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch(() => {
    console.log("Failed to connect mongodb");
  });

app.use("/user", userRouter);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
