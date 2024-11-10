import axios from "axios";

// Set up base URL for your API requests
const api = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Register function
export const registerUser = async (username, password , email , phone) => {
  try {
    const response = await api.post("/users/register", { username, password , email , phone });
    return response.data;
  } catch (error) {
    throw error.response?.data?.error || "An error occurred during registration.";
  }
};

// Login function
export const loginUser = async (username, password) => {
  try {
    const response = await api.post("/users/login", { username, password });
    return response.data; // This contains the token
  } catch (error) {
    throw error.response?.data?.error || "An error occurred during login.";
  }
};


export default api;
