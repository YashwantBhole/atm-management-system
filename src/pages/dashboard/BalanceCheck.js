import React from 'react';
import { FaRupeeSign } from 'react-icons/fa';

function BalanceCheck() {


  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }} // Add the path to your background image
   
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg text-center">
        <h4 className="text-3xl font-bold text-green-600 mb-4">Balance Check</h4>
        <p className="text-xl text-gray-800">
          Your current balance is <span className="text-green-500">
            <FaRupeeSign className="inline h-6" /> 5000
          </span></p>


      </div>
    </div>
  );
}

export default BalanceCheck;
