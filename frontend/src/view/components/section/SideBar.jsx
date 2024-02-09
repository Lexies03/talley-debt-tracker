import { Link } from "react-router-dom";

//assets
import Profile from "../../../assets/profile.jpg";
import Logo from "../../../assets/logo.png";

//components
import CustomButton from "../custom/CustomButton";

//icons
import { AiOutlinePlusCircle } from "react-icons/ai";

const SideBar = () => {
  const buttonTabs = [
    { name: "Summary", link: "board", icon: <AiOutlinePlusCircle /> },
    { name: "Manage Debts", link: "debt", icon: <AiOutlinePlusCircle /> },
    { name: "Account", link: "board", icon: <AiOutlinePlusCircle /> },
    { name: "Settings", link: "board", icon: <AiOutlinePlusCircle /> },
  ];
  
  return (
    <div className="flex flex-col justify-between lg:w-[220px] 2xl:w-[300px] h-screen bg-gray-200">
      <section className="flex items-center gap-1 bg-slate-800 p-2">
        <img src={Logo} alt="Logo" className="w-12 h-10" />
        <p className="font-poppins font-bold text-lg text-white">Talley</p>
      </section>

      <div className="flex flex-col justify-between lg:w-[220px] 2xl:w-[300px] h-screen bg-gray-200">
        <div>
          <section className="flex flex-col items-center border-b-2 border-gray-300 p-2">
            <img
              src={Profile}
              alt="Profile Picture"
              className="lg:w-44 lg:h-44 2xl:w-52 2xl:h-52 object-cover rounded-full p-1 border-2 border-slate-400"
            />
            <p className="text-lg text-black font-bold">Kim Taehyung</p>
            <p className="text-sm text-black mb-4">ID: ADMIN-001</p>
          </section>
          <section>
            <ul className="">
              {buttonTabs.map((tabs, index) => (
                <Link
                  to={tabs.link}
                  key={index}
                  className="flex w-full p-2 2xl:text-md lg:text-sm border-b-2 border-gray-300 text-orange-800 hover:bg-slate-300 hover:rounded-md hover:text-blue-900 hover:font-bold"
                >
                  <span className="text-xl mx-2">{tabs.icon}</span>
                  <li>{tabs.name}</li>
                </Link>
              ))}
            </ul>
          </section>
        </div>
        <CustomButton
          name="Logout"
          width="w-full"
          bgColor="bg-red-500 hover:bg-red-800"
          textColor="text-white"
        />
      </div>
    </div>
  );
};

export default SideBar;
