
const InputWithIcon = ({ placeholder, borderColor }) => {
  return (
    <div className="relative">
      <label className="text-sm mr-4 text-gray-500">Numéro de carte</label>
      
      <div className="flex items-center">
        <div style={{ position: 'relative', paddingRight: '30px' }}>
          <img
            src="https://img.icons8.com/color/24/000000/mastercard-logo.png" 
            alt="Mastercard Logo"
            style={{ position: 'absolute', left: '5px', top: '55%', transform: 'translateY(-50%)', width: '30px', height: 'auto' }} 
          />
          <input
            type="text"
            placeholder={placeholder}
            className="mt-2 bg-gray-200 px-4 py-3 w-[560px] rounded-md border-b-2 bg-gray-200 focus:border-gray-300 focus:outline-none"
            style={{ borderBottomColor: borderColor, paddingLeft: '60px' }}
          />
        </div>
      </div>
    </div>
  );
};

export default InputWithIcon;
