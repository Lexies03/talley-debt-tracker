import { Link } from "react-router-dom";

import CustomInput from "../../components/custom/CustomInput";
import CustomButton from "../../components/custom/CustomButton";
import CustomCategoryButton from "../../components/custom/CustomCategoryButton";

//icons
import { AiOutlinePlusCircle } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { AiOutlineShop } from "react-icons/ai";
import { AiOutlinePound } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { AiTwotoneMobile } from "react-icons/ai";
import { AiTwotoneReconciliation } from "react-icons/ai";

const Debt = ({ currentCategory }) => {
  const buttonCategory = [
    {
      name: "Sari-Sari Store",
      link: "/talley/store",
      icon: <AiOutlineShop />,
      iconColor: "text-orange-700",
      hover: "hover:bg-orange-100",
    },
    {
      name: "House Rent",
      link: "debt",
      icon: <AiOutlineHome />,
      iconColor: "text-blue-700",
      hover: "hover:bg-blue-100",
    },
    {
      name: "Money Lending",
      link: "board",
      icon: <AiOutlinePound />,
      iconColor: "text-green-700",
      hover: "hover:bg-green-100",
    },
    {
      name: "Load",
      link: "board",
      icon: <AiTwotoneMobile />,
      iconColor: "text-purple-700",
      hover: "hover:bg-purple-100",
    },
    {
      name: "Services",
      link: "board",
      icon: <AiTwotoneReconciliation />,
      iconColor: "text-pink-700",
      hover: "hover:bg-pink-100",
    },
  ];

  return (
    <div className="bg-white h-[calc(100vh-57px)] overflow-auto">
      <div className="">
        <main className="flex items-center justify-between p-1 px-4 border-b-4 border-slate-400 bg-gray-300">
          <h1 className="font-bold text-2xl text-blue-900 font-roboto">
            Manage Debt
          </h1>
          <CustomButton
            iconColor="text-green-800"
            name="Category"
            hover="hover:text-green-800"
            width="w-auto"
            height="h-auto"
            icon={<AiOutlinePlusCircle />}
          />
          <CustomInput
            width="w-full "
            height="h-6"
            percentage="w-1/4"
            placeholder="Search a category"
            borderContainer="border-2 border-slate-500"
            icon={<AiOutlineSearch />}
          />
        </main>

        <section className="grid grid-cols-3 gap-4 p-6">
          {buttonCategory.map((category,index) => {
            return (
              <Link to={category.link} key={index}>
                <CustomCategoryButton
                  name={category.name}
                  icon={category.icon}
                  iconColor={category.iconColor}
                  hover={category.hover}
                />
              </Link>
            );
          })}
        </section>

        {/* <section className="">
          <ul className="flex flex-wrap justify-center items-center gap-4">
            {currentCategory.map((category) => {
              return (
                <li key={category._id} className="basis-2/5">
                  <div className=" h-24 w-full border-2 border-blue-900 rounded-md flex items-center justify-center">
                    <p className="p-1">{category.name}</p>
                  </div>
                </li>
              );
            })}

            {categoryImages.map((image, index) => {
              return (
                <li key={index}>
                  <img src={image.name} alt="Image" />
                </li>
              );
            })}
          </ul>
        </section> */}
      </div>
    </div>
  );
};

export default Debt;
