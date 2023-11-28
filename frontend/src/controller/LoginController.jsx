import LoginModal from "../view/components/modal/LoginModal";
import AuthContext from "../model/provider/AuthProvider";
import { useContext } from "react";

const LoginController = () => {
  const [state, dispatch] = useContext(AuthContext);

  return (
    <div>
      <LoginModal />
    </div>
  );
};

export default LoginController;
