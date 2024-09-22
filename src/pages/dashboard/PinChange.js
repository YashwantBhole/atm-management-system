import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function PinChange() {
const [showPopup , setShowPopup] = useState(false)
const navigate = useNavigate();

const handlePinChange = (e) => {
  e.preventDefault();
  // Trigger popup when money is withdrawn
  setShowPopup(true);

};

const closePopup= ()=>{
  setShowPopup(false)
  navigate('/signin')
}

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }} // Replace with your background image path
    >
      <div className="bg-white bg-opacity-50 p-8 rounded-lg shadow-lg">
        <h4 className="text-3xl font-bold text-blue-600 mb-4">Change PIN</h4>
        <form onSubmit={handlePinChange}>
          <div className="mb-3">
            <label htmlFor="currentPin" className="form-label text-lg text-gray-800">Current PIN</label>
            <input
              type="password"
              className="form-control text-lg p-2 border rounded"
              id="currentPin"
              placeholder="Enter current PIN"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="newPin" className="form-label text-lg text-gray-800">New PIN</label>
            <input
              type="password"
              className="form-control text-lg p-2 border rounded"
              id="newPin"
              placeholder="Enter new PIN"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="confirmNewPin" className="form-label text-lg text-gray-800">Confirm New PIN</label>
            <input
              type="password"
              className="form-control text-lg p-2 border rounded"
              id="confirmNewPin"
              placeholder="Confirm new PIN"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-full text-lg py-2">Change PIN</button>
        </form>
      </div>


      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-bold text-green-600">PinChanged Successful!</h3>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
            </div>
            </div>
      )}

    </div>
  );
}

export default PinChange;
