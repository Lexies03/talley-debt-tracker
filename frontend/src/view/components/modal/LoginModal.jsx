import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../model/provider/AuthProvider";

//icons
import { AiFillCloseCircle } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";

//components
import CustomInput from "../custom/CustomInput";
import CustomButton from "../custom/CustomButton";
import CustomButtonText from "../custom/CustomButtonText";

// assets
import Logo from "../../../assets/logo.png";

const LoginModal = () => {
  const [state, dispatch] = useContext(AuthContext);
  const navigate = useNavigate();

  const loginModalClose = () => {
    dispatch({ type: "LOGIN_MODAL_OPEN", payload: false });
  };

  const registerModalOpen = () => {
    dispatch({ type: "REGISTER_MODAL_OPEN", payload: true });
    dispatch({ type: "LOGIN_MODAL_OPEN", payload: false });
  };

  const loginEnter = () => {
    navigate("talley");
  };

  return (
    <div>
      <section className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
        <div className="flex flex-col items-center justify-center">
          <div className="md: w-96 flex items-center flex-col bg-gray-200 p-2 rounded-lg">
            <button className="place-self-end" onClick={loginModalClose}>
              <AiFillCloseCircle />
            </button>
            <div className="flex flex-col items-center">
              <img src={Logo} width="50px" height="50px" />
              <h1 className="text-2xl font-bold text-blue-900">Login</h1>
              <p>Enjoy using the app!</p>
            </div>
            <form className="flex flex-col items-center mt-5 mb-2 w-full">
              <CustomInput
                width="w-full"
                height="h-8"
                type="text"
                icon={<MdOutlineMailOutline />}
                placeholder="Email"
                percentage="w-[80%]"
              />
              <CustomInput
                width="w-full"
                height="h-8"
                type="password"
                icon={<MdLockOutline />}
                placeholder="Password"
                percentage="w-[80%]"
              />
            </form>
            <CustomButton
              name="Login"
              width="w-[80%]"
              height="h-auto"
              bgColor="bg-blue-900"
              textColor="text-white"
              hover="hover:bg-green-900"
              onClick={loginEnter}
            />
            <CustomButtonText
              name="Forgot Password?"
              textColor="text-gray-500"
              width="text-sm"
            />
            <CustomButtonText
              name="Don't have an account? Register"
              textColor="text-gray-500"
              width="text-sm"
              onClick={registerModalOpen}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginModal;
