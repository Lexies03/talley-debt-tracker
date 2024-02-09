const CustomInput = ({
  width,
  height,
  type,
  icon,
  placeholder,
  percentage,
  borderContainer,
}) => {
  // const sizeInput = `w-${width} h-${height} outline-0`;
  const sizeInput = `${width} ${height} outline-0 text-md px-2`;
  const container = `${percentage} ${borderContainer} flex items-center bg-white rounded-md p-1 m-1`;
  return (
    <div className={container}>
      <input type={type} placeholder={placeholder} className={sizeInput} />
      <span className="text-2xl text-gray-400 pr-2">{icon}</span>
    </div>
  );
};

export default CustomInput;
