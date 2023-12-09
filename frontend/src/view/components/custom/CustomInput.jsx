const CustomInput = ({ width, height, type, icon, placeholder }) => {
  // const sizeInput = `w-${width} h-${height} outline-0`;
  const sizeInput = `${width} ${height} outline-0 text-md`;
  return (
    <div className="flex items-center bg-white rounded-md p-1 w-[80%] m-1">
      <input type={type} placeholder={placeholder} className={sizeInput} />
      <span className="text-2xl text-gray-400">{icon}</span>
    </div>
  );
};

export default CustomInput;
