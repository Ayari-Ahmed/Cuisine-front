import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  // Check if the user is signed in
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    return token ? true : false;
  };

  // Handle user sign out
  const handleSignOut = () => {
    // Remove the token from localStorage
    localStorage.removeItem('token');
    
    // Optionally, navigate to the sign-in page after logout
    navigate('/SignIn');
  };

  return (
    <div>
      <div className='m-2 mt-0 w-full flex flex-wrap mx-auto font-medium justify-between float-left ml-auto bg-slate-100' style={{ marginTop: '-5px' }}>
        <Link to='/' className='m-2' style={{ marginRight: '5%' }}>Home </Link>
        <Link to='/#' className='m-2' style={{ marginRight: '5%' }}>Recepies </Link>
        <Link to='/#' className='m-2' style={{ marginRight: '5%' }}>Shopping list</Link>
        <Link to='/#' className='m-2' style={{ marginRight: '5%' }}>About  </Link>
        
        {/* Conditional rendering based on authentication */}
        {isAuthenticated() ? (
          <button onClick={handleSignOut} className='m-2' style={{ marginRight: '5%' }}>
            Disconnect
          </button>
        ) : (
          <>
            <Link to='/SignIn' className='m-2' style={{ marginRight: '5%' }}>Sign In</Link>
            <Link to='/SignUp' className='m-2' style={{ marginRight: '5%' }}>Sign Up</Link>
          </>
        )}
      </div>

      <div className='flex justify-between items-center w-full p-4'>
        <div className='flex items-center'>
          <h1 className='text-3xl font-bold'>Logo</h1>
        </div>
        <div className='flex items-center'>
          <input type='text' placeholder='Search...' className='p-2 border rounded-l' />
          <button className='p-2 bg-black text-white rounded-r'>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.9 14.32a8 8 0 111.414-1.414l4.387 4.387a1 1 0 01-1.414 1.414l-4.387-4.387zM8 14a6 6 0 100-12 6 6 0 000 12z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
