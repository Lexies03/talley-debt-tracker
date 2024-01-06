import { Link } from "react-router-dom";

//assets
import Profile from "../../../assets/profile.jpg";

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
    <div className="flex flex-col justify-between w-[300px] h-screen bg-slate-800">
      <div>
        <section className="flex flex-col items-center border-b-2 border-blue-100 p-2">
          <img
            src={Profile}
            alt="Profile Picture"
            className="w-52 h-52 object-cover rounded-full p-2"
          />
          <p className="text-lg text-white font-bold">Kim Taehyung</p>
          <p className="text-sm text-white mb-4">ID: ADMIN-001</p>
        </section>
        <section>
          <ul className="">
            {buttonTabs.map((tabs, index) => (
              <Link
                to={tabs.link}
                key={index}
                className="flex w-full p-2 text-md border-b-2 border-blue-100 text-orange-100 hover:bg-slate-600"
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
