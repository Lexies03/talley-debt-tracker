import { Link } from "react-router-dom";

//assets
import Profile from "../../../assets/profile.jpg";
import Logo from "../../../assets/logo.png"

//components
import CustomButton from "../custom/CustomButton";

const SideBar = () => {
  const buttonTabs = [
    { name: "Summary", link: "board" },
    { name: "Manage Debts", link: "debt" },
    { name: "Account", link: "board" },
    { name: "Settings", link: "board" },
  ];
  return (
    <div className="flex flex-col justify-between w-[300px] h-screen bg-gray-200">
      <section className="flex items-center gap-1 bg-slate-800 p-2">
        <img src={Logo} alt="Logo" className="w-12 h-10" />
        <p className="font-poppins font-bold text-lg text-white">Talley</p>
      </section>

      <div>
        <section className="flex flex-col items-center border-b-2 border-gray-300 p-2">
          <img
            src={Profile}
            alt="Profile Picture"
            className="w-52 h-52 object-cover rounded-full p-1 border-2 border-slate-400"
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
                className="flex w-full p-2 text-md border-b-2 border-gray-300 text-orange-800 hover:bg-slate-300 hover:rounded-md hover:text-blue-900 hover:font-bold"
              >
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
  );
};

export default SideBar;
