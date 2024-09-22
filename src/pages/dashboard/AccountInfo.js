import React from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Font Awesome Icon

function AccountInfo() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-dark bg-opacity-70 p-8 rounded-lg shadow-lg animate-fadeInUp">
        <div className="flex items-center justify-center mb-6">
          {/* Profile Icon */}
          <FaUserCircle className="text-6xl text-blue-500 animate-bounce" />
        </div>
        <div className="text-center">
   
          <p className="text-x text-gray-700 mb-1"><span className="text-blue-500">OMKAR JADHAV</span></p>
          <p className="text-x text-gray-700">A/C No: <span className="text-blue-500">XXXX-XXXX-XXXX-1234</span></p>
        </div>
      </div>
    </div>
  );
}

export default AccountInfo;
