import { Outlet } from "react-router-dom";
import Logo from "../../assets/logo.png";

//component
import SideBar from "../components/section/SideBar";
import SearchDebtor from "../components/section/SearchDebtor";

const Dashboard = () => {
  return (
    <div className="flex bg-white">
      <SideBar />
      <section className="w-full">
        <div className="flex justify-between bg-blue-500 p-2">
          <SearchDebtor />
        </div>

        <section className="">
          <Outlet />
        </section>
      </section>
    </div>
  );
};

export default Dashboard;
