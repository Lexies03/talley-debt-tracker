const CustomInput = ({ width, height, type, icon }) => {
  return (
    <div className="div_custom_input">
      <input type={type} style={{ width: { width }, height: { height } }} />
      <img src={icon} alt="icon" style={{ width: "80%", height: "80%" }} />
    </div>
  );
};

export default CustomInput;
