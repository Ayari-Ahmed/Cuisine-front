import React, { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { registerUser } from '../service/api'; // Assuming registerUser is correctly implemented
import { toast } from 'react-toastify';  // Import toast

const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  // Handle the form submission for registration
  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await registerUser(username, password , email, phone);
      console.log("SignUp response:", response);
      // After successful registration, redirect to login page or home
      navigate('/SignIn');  // Redirect to SignIn page after successful registration
    } catch (error) {
      console.error("SignUp failed:", error);
      setErrorMessage(error || "An error occurred during registration.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Circular avatar/placeholder */}
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>

      {/* Form Container */}
      <div
        className="flex flex-col items-center rounded-xl w-[90%] md:w-[40%] p-8 mx-auto bg-white"
        style={{ boxShadow: '0px 4px 18px 0px rgba(0, 0, 0, 0.12)' }}
      >
        <h1 className="text-3xl font-bold mb-2">Create an account</h1>
        <p className="text-center text-gray-500 mb-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi lobortis maximus.
        </p>

        {/* Email Input */}
        <label className="mb-4 w-full">
          <span className="block text-sm font-medium text-gray-700">Email</span>
          <input
            type="email"
            className="mt-2 px-4 py-3 rounded-md w-full border-2 border-gray-300 focus:outline-none focus:border-gray-500"
            placeholder="Enter your email"
            value={email} // Bind email state to the input
            onChange={(e) => setEmail(e.target.value)} // Update email state on change
          />
        </label>

        {/* Phone Input */}
        <label className="mb-4 w-full">
          <span className="block text-sm font-medium text-gray-700">Phone</span>
          <input
            type="tel"
            className="mt-2 px-4 py-3 rounded-md w-full border-2 border-gray-300 focus:outline-none focus:border-gray-500"
            placeholder="Enter your phone number"
            value={phone} // Bind phone state to the input
            onChange={(e) => setPhone(e.target.value)} // Update phone state on change
          />
          <p className="text-sm text-gray-400 mt-1">
            We strongly recommend adding a phone number. This will help verify your account and keep it safe.
          </p>
        </label>

        {/* Username Input */}
        <label className="mb-4 w-full">
          <span className="block text-sm font-medium text-gray-700">Username</span>
          <input
            type="text"
            className="mt-2 px-4 py-3 rounded-md w-full border-2 border-gray-300 focus:outline-none focus:border-gray-500"
            placeholder="Choose a username"
            value={username} // Bind username state to the input
            onChange={(e) => setUsername(e.target.value)} // Update username state on change
          />
        </label>

        {/* Password Input */}
        <label className="mb-4 w-full">
          <span className="block text-sm font-medium text-gray-700">Password</span>
          <div style={{ position: 'relative', width: '100%' }}>
            <input
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Enter your password"
              className="mt-2 px-4 py-3 rounded-md w-full border-2 border-gray-300 focus:outline-none focus:border-gray-500"
              style={{ paddingRight: '40px' }}
              value={password} // Bind password state to the input
              onChange={(e) => setPassword(e.target.value)} // Update password state on change
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                right: '8px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              {passwordVisible ? <IconEyeOff size={20} /> : <IconEye size={20} />}
            </button>
          </div>
        </label>

        {/* Password Requirement Tips */}
        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500 mb-6">
          <div className="flex items-center">
            <span className="text-green-600 mr-2">•</span> Use 8 or more characters
          </div>
          <div className="flex items-center">
            <span className="text-green-600 mr-2">•</span> Use upper and lower case letters (e.g., Aa)
          </div>
          <div className="flex items-center">
            <span className="text-green-600 mr-2">•</span> Use a number (e.g., 1234)
          </div>
          <div className="flex items-center">
            <span className="text-green-600 mr-2">•</span> Use a symbol (e.g., !@#$)
          </div>
        </div>

        {/* Error Message */}
        {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

        {/* Sign Up Button */}
        <button
          type="button"
          onClick={handleSignUp}
          className="mt-4 px-4 py-3 rounded-full w-full text-xl"
          style={{ backgroundColor: '#000', color: '#fff' }}
        >
          Sign Up
        </button>

        {/* Terms and Links */}
        <label className="mt-4 text-center text-sm text-gray-500">
          By creating an account, you agree to the{' '}
          <a href="#" className="text-gray-700 underline">Terms of Use</a> and{' '}
          <a href="#" className="text-gray-700 underline">Privacy Policy</a>.
        </label>
      </div>
    </div>
  );
};

export default SignUp;
