
const Input = ({ placeholder, style }) => {
  const inputStyle = {
    borderBottom: style ? style.borderBottom || '1px solid transparent' : '1px solid transparent',
    ...style,
  };

  return (
    <input 
      type="text"
      className="mt-2 bg-gray-200 px-4 py-3 w-[560px] rounded-md bg-gray-200 "
      style={inputStyle}
      placeholder={placeholder}
    />
  );
};

export default Input;
