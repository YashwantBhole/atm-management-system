import React from 'react';
import { FaRupeeSign, FaInfoCircle } from 'react-icons/fa';

function TransactionHistory() {
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }} // Replace with your background image path
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
        <h4 className="text-3xl font-bold text-purple-600 mb-4">Transaction History</h4>
        <ul className="list-none">
          <li className="animate-fade-in mb-2 flex justify-between items-center">
            <span className="font-semibold flex items-center">
              <FaRupeeSign className="mr-1" /> 100
            </span>
            <span className="text-gray-600">01/01/2024</span>
            <FaInfoCircle className="text-blue-500 ml-2 cursor-pointer" title="Transaction details" />
          </li>
          <li className="animate-fade-in mb-2 flex justify-between items-center">
            <span className="font-semibold flex items-center">
              <FaRupeeSign className="mr-1" /> 50
            </span>
            <span className="text-gray-600">02/01/2024</span>
            <FaInfoCircle className="text-blue-500 ml-2 cursor-pointer" title="Transaction details" />
          </li>
          {/* Add more transactions with the same animation */}
        </ul>
      </div>
    </div>
  );
}

export default TransactionHistory;
