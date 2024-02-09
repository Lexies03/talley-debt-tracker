const CustomButton = ({
  name,
  width,
  height,
  type,
  icon,
  iconColor,
  textColor,
  bgColor,
  onClick,
}) => {
  const btnStyle = `flex justify-center font-bold px-4 py-1 rounded ${width} ${height} ${textColor} ${bgColor}`;
  const iconStyle = `text-2xl mr-1 ${iconColor}`;
  return (
    <button type={type} className={btnStyle} onClick={onClick}>
      <span className={iconStyle}>{icon}</span>
      {name}
    </button>
  );
};

export default CustomButton;
