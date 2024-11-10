import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  // Check if the user is authenticated (token exists in localStorage)
  const isAuthenticated = () => {
    const token = localStorage.getItem('token');
    console.log('Token from localStorage:', token);  // Log token to debug
    return token ? true : false;
  };

  return (
    <Routes>
      {/* Always accessible: SignUp and SignIn pages */}
      <Route 
        path="/SignUp" 
        element={isAuthenticated() ? <SignUp /> : <SignUp />} 
      />
      <Route 
        path="/SignIn" 
        element={isAuthenticated() ? <Login />: <Login />} 
      />

      {/* Protected Route: Home page */}
      <Route 
        path="/" 
        element={isAuthenticated() ? <Home /> : <Navigate to="/SignIn" />} 
      />
    </Routes>
  );
};

export default App;
