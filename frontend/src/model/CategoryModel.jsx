class CategoryModel {
  constructor() {}

  async getAllCategory() {
    try {
      const response = await fetch("http://localhost:1010/category");
      const category = await response.json();
      return category;
    } catch (error) {
      throw new Error("Failed to get all categories from model", error);
    }
  }
}
const modelCategory = new CategoryModel();
export default modelCategory;
