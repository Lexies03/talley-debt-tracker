import { useContext } from "react";
import { AuthContext } from "../../model/provider/AuthProvider";

//components
import NavigationMenu from "../components/section/NavigationMenu";
import LoginModal from "../components/modal/LoginModal";
import RegisterModal from "../components/modal/RegisterModal";
import Footer from "../components/section/Footer";

//assets
import DebtModelImage from "../../assets/debt-model.png";
import CellPhoneModel from "../../assets/cellphone-model.jpg";
import CustomButton from "../components/custom/CustomButton";

const HomePage = () => {
  const [state, dispatch] = useContext(AuthContext);

  return (
    <div>
      <section>
        <NavigationMenu />
      </section>

      <section>{state.loginModalOpen ? <LoginModal /> : null}</section>
      <section>{state.registerModalOpen ? <RegisterModal /> : null}</section>

      <section className="flex justify-around py-36">
        <div className="w-[40%] flex justify-center">
          <img src={DebtModelImage} alt="Model" className="w-80" />
        </div>
        <article className="mr-10 flex flex-col justify-between ">
          <h1 className="font-bold text-5xl text-blue-900 py-6">
            Track your debtors using this app!
          </h1>
          <p className="font-roboto font-bold text-2xl text-blue-900">
            Manage and monitor debts and debtors to make your financial business
            easier.
          </p>
          <div>
            <CustomButton
              name="Get Started"
              bgColor="bg-orange-600"
              textColor="text-white"
              width="text-xl"
              height="h-10"
              hover="bg-orange-900"
            />
          </div>
        </article>
        <img src={CellPhoneModel} alt="Model" className="w-64 rounded-full" />
      </section>

      <Footer />

      {/* <section className="flex justify-between bg-gradient-to-r from-blue-400 to-blue-500">
          <div className="ml-10">
            <img src={DebtModelImage} alt="Model" className="w-96" />
          </div>
          <article className="mr-10">
            <h1>Track your debtors using this app!</h1>
          </article>
        </section> */}
    </div>
  );
};

export default HomePage;
