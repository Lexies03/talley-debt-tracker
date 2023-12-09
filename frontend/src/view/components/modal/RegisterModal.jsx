import { useContext } from "react";
import { AuthContext } from "../../../model/provider/AuthProvider";

//icons
import { AiFillCloseCircle } from "react-icons/ai";
import { MdLockOutline } from "react-icons/md";
import { MdOutlineMailOutline } from "react-icons/md";
import { MdPersonOutline } from "react-icons/md";

//components
import CustomInput from "../custom/CustomInput";
import CustomButton from "../custom/CustomButton";
import CustomButtonText from "../custom/CustomButtonText";

// assets
import Logo from "../../../assets/logo.png";

    const RegisterModal = () =>{
    const [state, dispatch] = useContext(AuthContext);

    const registerModalClose = () => {
    dispatch({ type: "REGISTER_MODAL_OPEN", payload: false });
    };

    return (
      <div>
        <section className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
          <div className="flex flex-col items-center justify-center">
            <div className="md: w-96 flex items-center flex-col bg-gray-200 p-2 rounded-lg">
              <button className="place-self-end" onClick={registerModalClose}>
                <AiFillCloseCircle />
              </button>
              <div className="flex flex-col items-center">
                <img src={Logo} width="50px" height="50px" />
                <h1 className="text-2xl font-bold text-blue-900">Register</h1>
                <p>Invite your Friends!</p>
              </div>
              <form className="flex flex-col items-center mt-5 mb-2 w-full">
                <CustomInput
                  width="w-full"
                  height="h-7"
                  type="text"
                  icon={<MdPersonOutline />}
                  placeholder="First Name"
                />
                <CustomInput
                  width="w-full"
                  height="h-7"
                  type="text"
                  icon={<MdPersonOutline />}
                  placeholder="Last Name"
                />
                <CustomInput
                  width="w-full"
                  height="h-7"
                  type="text"
                  icon={<MdPersonOutline />}
                  placeholder="@username"
                />
                <CustomInput
                  width="w-full"
                  height="h-7"
                  type="text"
                  icon={<MdOutlineMailOutline />}
                  placeholder="Email"
                />
                <CustomInput
                  width="w-full"
                  height="h-7"
                  type="password"
                  icon={<MdLockOutline />}
                  placeholder="Password"
                />
                <CustomInput
                  width="w-full"
                  height="h-7"
                  type="password"
                  icon={<MdLockOutline />}
                  placeholder="Confirm Password"
                />
              </form>
              <CustomButton
                name="Login"
                width="w-[80%]"
                height="h-auto"
                bgColor="bg-blue-900"
                textColor="text-white"
                hover="hover:bg-green-900"
              />
              <CustomButtonText
                name="Already have an account? Login"
                textColor="text-gray-500"
                width="text-sm"
              />
            </div>
          </div>
        </section>
      </div>
    );
}

export default RegisterModal;