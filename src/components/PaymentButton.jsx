
const PaymentButton = () => {
  const buttonStyle = {
    backgroundColor: '#FC5A1A',
    padding: '12px 60px', 
    borderRadius: '4px',
    display: 'flex',
    alignItems: 'center',
    color: 'white', 
    fontSize: '16px', 
    minWidth: '200px', 
  };

  return (
    <button className="rounded-md" style={buttonStyle}>
      <img
      
        src="https://img.icons8.com/ios-filled/50/FFFFFF/lock.png"
        alt="Lock Icon"
        className="mr-2"
        width="20" 
        height="20"
        color='white'
      />
      Pay for the order
    </button>
  );
};

export default PaymentButton;
