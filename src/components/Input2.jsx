import  { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css'; 

const Input2 = ({ type, placeholder }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  let inputClass = "border-b-2 border-gray-200 bg-gray-200 px-4 py-3 rounded-md mt-2";
  let inputWidth = "w-30"; 
  inputClass += "bg-gray-100";

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  if (type === 'date') {
    return (
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="MM/dd"
        placeholderText={placeholder}
        className={`${inputClass} ${inputWidth}`}
      />
    );
  } else if (type === 'text') {
    return (
      <input
        type="text"
        placeholder={placeholder}
        className={`${inputClass} ${inputWidth}`}
        min="0"
        max="999"
      />
    );
  } else {
    return null;
  }
};

export default Input2;
