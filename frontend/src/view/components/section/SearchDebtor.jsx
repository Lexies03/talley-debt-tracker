
//assets
import Logo from "../../../assets/logo.png";

//components
import CustomInput from "../custom/CustomInput";

//icons
import { MdPersonOutline } from "react-icons/md";

const SearchDebtor = () => {
  return (
    <div className="flex justify-between items-center w-full">
      <CustomInput
        width="w-96"
        height="h-6"
        type="text"
        placeholder="Find Debtor"
        icon={<MdPersonOutline />}
        // percentage="w-[60%]"
      />
      {/* <div>
        <p className="font-bold text-xl text-orange-100">Welcome Taehyung!</p>
      </div> */}
      <section className="flex items-center gap-1">
        <img src={Logo} alt="Logo" className="w-12 h-10" />
        <p className="font-poppins font-bold text-lg text-white">Talley</p>
      </section>
    </div>
  );
};

export default SearchDebtor;
