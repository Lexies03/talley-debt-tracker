const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const helmet = require("helmet");
require("dotenv").config();

//routers
const userRouter = require("./router/user.router");
const categoryRouter = require("./router/category.router");

const app = express();
const PORT = process.env.PORT || 1010;

app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(express.urlencoded({ extended: false }));

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((error) => {
    console.log(error, "Failed to connect mongodb");
  });

app.use("/user", userRouter);
app.use("/category", categoryRouter);

app.listen(PORT, () => {
  console.log(`App is listening at port ${PORT}`);
});
