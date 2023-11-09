import {AiFillCloseCircle} from "react-icons/ai"

const LoginModal = () => {
  return (
    <div>
      <section className="fixed inset-0  bg-opacity-25 backdrop-blur-sm flex justify-center items-center md: w-96  flex-col bg-blue-800 p-2 rounded-lg">
        <div>
          <button>
            <AiFillCloseCircle />
          </button>
        </div>
      </section>
    </div>
  );
};

export default LoginModal;
