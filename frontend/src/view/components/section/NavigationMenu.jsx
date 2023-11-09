//components
import CustomButton from "../custom/CustomButton";
import CustomButtonText from "../custom/CustomButtonText";

//assets
import Logo from "../../../assets/logo.png";

const NavigationMenu = () => {
  const links = [
    {
      name: "Home",
      link: "#",
    },
    {
      name: "About",
      link: "#",
    },
    {
      name: "Features",
      link: "#",
    },
    {
      name: "Contact",
      link: "#",
    },
  ];
  return (
    <div className="flex items-center justify-between px-6 py-1 shadow-md fixed w-full bg-white z-50">
      <section className="flex items-center gap-1">
        <img src={Logo} alt="Logo" className="w-14 h-12" />
        <p className="font-poppins font-bold text-2xl text-blue-950">Talley</p>
      </section>
      <section className="space-y-2 cursor-pointer hidden">
        <span class="block w-8 h-0.5 bg-gray-600"></span>
        <span class="block w-8 h-0.5 bg-gray-600"></span>
        <span class="block w-8 h-0.5 bg-gray-600"></span>
      </section>
      <section className="">
        <ul className="flex gap-8 font-poppins">
          {links.map((link, index) => (
            <li
              key={index}
              className="text-md font-bold text-blue-950 cursor-pointer hover:text-blue-900"
            >
              {link.name}
            </li>
          ))}
        </ul>
      </section>
      <div className="flex items-center gap-3">
        <CustomButton
          name="Login"
          width="w-auto"
          height="h-auto"
          bgColor="bg-blue-900"
          textColor="text-white"
          hover="hover:bg-green-900"
        />
        {/* <CustomButtonText name="Register" textColor="text-gray-800" width="text-md"/> */}
        {/* <button className="font-bold text-orange-600">Register</button> */}
      </div>
    </div>
  );
};

export default NavigationMenu;
