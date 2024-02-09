const CategoryModel = require("../model/category.entity");

const registerCategory = async (request, response) => {
  const { name, operator} = request.body;
  try {

      const newCategory = await CategoryModel.create({
        name,
        operator,
      });
      response.status(201).json(newCategory);
  } catch (error) {
    response.status(500).send("Failed to add category");
  }
};

const getCategory = async (request, response) => {
  try {
    const category = await CategoryModel.find();
    response.status(200).json(category);
  } catch (error) {
    response.status(500).send("Failed to get all categories");
  }
};

const deleteCategory = async (request, response) => {
  try {
    const id = request.params.id;
    const category = await CategoryModel.findOneAndDelete({ _id: id });
    response.status(200).json(category);
  } catch (error) {
    response.status(500).send("Failed to delete category");
  }
};

const updateCategory = async (request, response) => {
  try {
    const id = request.params.id;
    const category = await CategoryModel.findOneAndUpdate(
      { _id: id },
      { ...request.body }
    );
    response.status(200).json(category);
  } catch (error) {
    response.status(500).send("Failed to update category");
    console.log(error);
  }
};

module.exports = {
  getCategory,
  registerCategory,
  deleteCategory,
  updateCategory,
};
