const CustomButtonText = ({
  name,
  width,
  height,
  type,
  icon,
  textColor,
  hover,
  onClick,
}) => {
  const btnStyle = `px-4 py-0 underline ${width} ${height} ${textColor} ${hover}`;
  return (
    <button type={type} className={btnStyle} onClick={onClick}>
      {name}
      <span>{icon}</span>
    </button>
  );
};

export default CustomButtonText;
