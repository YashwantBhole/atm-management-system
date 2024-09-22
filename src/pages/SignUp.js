import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const [pin, setPin] = useState('');
  const [confirmPin, setConfirmPin] = useState('');
  const [atmCardNumber, setAtmCardNumber] = useState('');
  const [numberError, setNumberError] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleAtmCardChange = (e) => {
    setAtmCardNumber(e.target.value);
  };

  const handleSetPinChange = (e) => {
    setPin(e.target.value);
  };

  const handleConfirmPinChange = (e) => {
    setConfirmPin(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (atmCardNumber.length !== 16) {
      setNumberError("Please enter a 16-digit card number");
      return;
    }

    if (pin !== confirmPin) {
      setError('Set PIN and Confirm PIN must be the same');
      return;
    }

    // After validation success
    alert("Sign Up successful!");
    navigate('/signin');
  };

  return (
    <div className="container mx-auto mt-0 flex justify-center items-center min-h-screen">
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg w-full max-w-lg backdrop-blur-md">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="accountHolderName" className="block text-white text-lg mb-2">Account Holder Name</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="accountHolderName"
              placeholder="Enter account holder name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="atmCardNumber" className="block text-white text-lg mb-2">ATM Card Number</label>
            <input
              type="text"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="atmCardNumber"
              placeholder="Enter your ATM card number"
              onChange={handleAtmCardChange}
              value={atmCardNumber}
              maxLength="16"
              required
              pattern="\d*"
            />
            {numberError && <small className="text-red-400">{numberError}</small>}
          </div>

          <div className="mb-4">
            <label htmlFor="setPin" className="block text-white text-lg mb-2">Set PIN</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="setPin"
              placeholder="Set your PIN"
              onChange={handleSetPinChange}
              value={pin}
              maxLength="6"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="confirmPin" className="block text-white text-lg mb-2">Confirm PIN</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
              id="confirmPin"
              placeholder="Confirm your PIN"
              onChange={handleConfirmPinChange}
              value={confirmPin}
              maxLength="6"
              required
            />
            {error && <small className="text-red-400">{error}</small>}
          </div>

          <div className="mt-6">
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-500 hover:bg-green-600 text-white text-xl rounded-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              Sign Up
            </button>
          </div>
          <label htmlFor="signup" className="block cursor-pointer mt-10 text-lg mb-2 text-blue-500 hover:text-blue-700 underline" 
           onClick={() => navigate('/signin')}>Already have account ?</label>
        </form>
      </div>
    </div>
  );
}

export default SignUp;
