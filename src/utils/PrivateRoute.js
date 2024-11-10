import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  // Check if user is authenticated (you can use localStorage, context, or any state management)
  const token = localStorage.getItem("token");

  // If no token, redirect to Login page
  if (!token) {
    return <Navigate to="/SignIn" />;
  }

  return children; // User is authenticated, render the protected page
};

export default PrivateRoute;
