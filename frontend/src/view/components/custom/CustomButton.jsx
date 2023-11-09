const CustomButton = ({
  name,
  width,
  height,
  type,
  icon,
  textColor,
  bgColor,
  hover,
}) => {
  const btnStyle = `font-bold px-4 py-1 rounded ${width} ${height} ${textColor} ${bgColor} ${hover}`;
  return (
    <button type={type} className={btnStyle + hover}>
      {name}
      <span>{icon}</span>
    </button>
  );
};

export default CustomButton;
