import React, { useState } from 'react';

const BlockCard = () => {
  const [confirm, setConfirm] = useState(false);

  const handleBlock = () => {
    setConfirm(true);
  };

  const handleConfirmBlock = () => {
    alert('Your card has been blocked.');
    setConfirm(false); // Reset confirmation
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-2xl font-bold mb-4">Block Card</h2>

        {!confirm ? (
          <div>
            <p className="mb-4 text-red-600">Are you sure you want to block your card?</p>
            <button onClick={handleBlock} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
              Block Card
            </button>
          </div>
        ) : (
          <div>
            <p className="mb-4 text-yellow-600">Confirm: This action cannot be undone.</p>
            
          <div className="mb-4">
            <label htmlFor="pin" className="block text-black text-lg mb-2">Enter your pin to confirm</label>
            <input
              type="password"
              className="w-full px-4 py-2 rounded-md bg-white bg-opacity-80 text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
              id="pin"
              placeholder="Enter your PIN"
              value={''}
              onChange={''}
              required
            />
          </div>

            <div className="flex justify-between">
              <button
                onClick={handleConfirmBlock}
                className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
              >
                Yes, Block
              </button>
              <button
                onClick={() => setConfirm(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlockCard;
