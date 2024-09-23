import React, { useContext } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Font Awesome Icon
import { UserContext } from '../../UserContext';
import { useNavigate } from 'react-router-dom';

function AccountInfo() {
   
  const navigate = useNavigate();
  const {user} = useContext(UserContext);

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-light bg-opacity-70 p-8 rounded-lg shadow-lg animate-fadeInUp">
        <div className="flex items-center justify-center mb-6">
          {/* Profile Icon */}
          <FaUserCircle className="text-6xl text-blue-500 animate-bounce" />
        </div>

        {user ? (

          <div className="text-center">
          <p className="text-xl text-gray-700 mb-1 font-semibold"><span className="text-blue-500">{user.name}</span></p>
          <p className="text-x text-gray-700 font-semibold">A/C No: <span className=" text-xl text-blue-500">{user.atmCardNumber}</span></p>
          <p className="text-x text-gray-700 font-semibold">Branch : <span className="text-blue-500">Bank Of Maharashtra</span></p>
          <p className='text-x text-blue-700 font-semibold'>Latur</p>
        </div>
        ) : (
          <>          <p>No account info available</p>
          <label htmlFor="signup" className="block cursor-pointer mt-10 text-lg mb-2 text-blue-500 hover:text-blue-700 underline" 
          onClick={() => navigate('/signup')}>Sign Up?</label>
          </>

        )}
      </div>
    </div>
  );
}

export default AccountInfo;
