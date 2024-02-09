const CustomCategoryButton = ({
  name,
  type,
  icon,
  iconColor,
  hover,
  onClick,
}) => {
  const btnStyle = ` flex flex-col justify-center items-center w-full p-2 rounded-md border-2 border-slate-500 ${hover}`;
  const iconStyle = `text-7xl ${iconColor}`;
  return (
    <button type={type} className={btnStyle} onClick={onClick}>
      <p className="text-md font-bold text-black ">{name}</p>
      <span className={iconStyle}>{icon}</span>
    </button>
  );
};

export default CustomCategoryButton;
