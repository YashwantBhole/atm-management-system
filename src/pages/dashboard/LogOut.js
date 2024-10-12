import React from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = ({ onLogout }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Perform any logout operations (like clearing session or tokens)
    onLogout(); // Optional: Pass a callback to handle logout
    navigate('/login'); // Redirect to login page after logging out
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full text-center">
        <h2 className="text-2xl font-bold mb-4">Are you sure you want to log out?</h2>
        <button
        //   onClick={handleLogout}
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Log Out
        </button>
      </div>
    </div>
  );
};

export default Logout;
