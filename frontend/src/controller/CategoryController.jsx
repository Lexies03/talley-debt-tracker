// import { useState, useEffect } from "react";

// import modelCategory from "../model/CategoryModel";
// import Debt from "../view/pages/outlet/Debt";

// const CategoryController = () => {
//   const [currentCategory, setCurrentCategory] = useState([]);
//   console.log(currentCategory);

//   const getCategories = async () => {
//     return modelCategory.getAllCategory();
//   };

//   useEffect(() => {
//     getCategories.then((category) => {
//       setCurrentCategory(category);
//     });
//   }, []);

//   return <Debt currentCategory={currentCategory} />;
// };

// export default CategoryController;
