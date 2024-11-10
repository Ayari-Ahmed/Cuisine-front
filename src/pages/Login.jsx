import React, { useState } from 'react';
import { IconEye, IconEyeOff } from '@tabler/icons-react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { loginUser } from '../service/api'; // Assuming loginUser is correctly implemented

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  // Handle login logic
  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("E: ", username);  // Debug line
    

    
    try {
      const response = await loginUser(username, password);
      console.log('Login response:', response); // Debug line
  
      if (response.token) {
        console.log('Token received:', response.token);
        localStorage.setItem('token', response.token);
        navigate('/'); 
      }
    } catch (error) {
      console.error("Login failed:", error);
      setErrorMessage(error.response?.data?.error || "An error occurred during login.");
    }
  };
  

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      {/* Circular avatar/placeholder */}
      <div className="w-16 h-16 bg-gray-300 rounded-full mb-6"></div>
      
      <div
        className="flex flex-col items-center rounded-xl w-[90%] md:w-[40%] p-8 mx-auto bg-white"
        style={{ boxShadow: '0px 4px 18px 0px rgba(0, 0, 0, 0.12)' }}
      >
        <h1 className="text-3xl font-bold mb-6">Sign in</h1>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="w-full">
          {/* Email Input */}
          <label className="mb-4 w-full">
            <span className="block text-sm font-medium text-gray-700">Email or mobile phone number</span>
            <input
              type="text"
              className="mt-2 px-4 py-3 rounded-md w-full border-2 border-gray-300 focus:outline-none focus:border-gray-500"
              placeholder="Enter your email"
              value={username} // Bind username state to the input
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>

          {/* Password Input */}
          <label className="mb-4 w-full">
            <span className="block text-sm font-medium text-gray-700">Your password</span>
            <div style={{ position: 'relative', width: '100%' }}>
              <input
                type={passwordVisible ? 'text' : 'password'}
                placeholder="Enter your password"
                className="mt-2 px-4 py-3 rounded-md w-full border-2 border-gray-300 focus:outline-none focus:border-gray-500"
                style={{ paddingRight: '40px' }}
                value={password} // Bind password state to the input
                onChange={(e) => setPassword(e.target.value)}
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

          {/* Error Message */}
          {errorMessage && <p className="text-red-500 text-sm mb-4">{errorMessage}</p>}

          {/* Login Button */}
          <button
            type="submit"
            className="mt-4 px-4 py-3 rounded-full w-full text-xl"
            style={{ backgroundColor: '#C7C7C7', color: '#fff' }}
          >
            Log in
          </button>
        </form>

        {/* Terms and Links */}
        <label className="mt-4 text-center text-sm text-gray-500">
          By continuing, you agree to the{' '}
          <a href="#" className="text-gray-700 underline">Terms of Use</a> and{' '}
          <a href="#" className="text-gray-700 underline">Privacy Policy</a>.
        </label>

        <div className="mt-2 text-center">
          <a href="#" className="text-gray-500 underline text-sm">Other issues with sign in</a>
          <span className="mx-4">|</span>
          <a href="#" className="text-gray-500 underline text-sm">Forget your password</a>
        </div>
      </div>

      {/* Create an Account Section */}
      <div className="mt-8 text-center w-full">
        <span className="text-gray-500">New to our community?</span>
        <div className="mt-4">
          <button
            type="button"
            className="px-4 py-3 rounded-full w-[90%] md:w-[40%] text-xl border border-black bg-white"
            onClick={()=>navigate('/SignUp')}
          >
            Create an account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
