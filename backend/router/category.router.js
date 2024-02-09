const express = require("express");
const categoryRouter = express.Router();

const {
  getCategory,
  registerCategory,
  deleteCategory,
  updateCategory,
} = require("../controller/category.controller");

categoryRouter.get("/", getCategory);
categoryRouter.post("/", registerCategory);
categoryRouter.delete("/:id", deleteCategory);
categoryRouter.put("/:id", updateCategory);

module.exports = categoryRouter;
