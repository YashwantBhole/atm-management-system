import React, { useContext, useState } from 'react';
import { FaRupeeSign } from 'react-icons/fa';
import { UserContext  } from '../../UserContext';

function WithdrawMoney() {
  const [withdrawAmount, setWithdrawAmount] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [error, setError] = useState(false)

 const {withdrawMoney, balance} = useContext(UserContext)

  const handleWithdraw = (e) => {
    e.preventDefault();
    const amount = parseFloat(withdrawAmount);

    if(amount <= balance){
      withdrawMoney(amount);
        // Trigger popup when money is withdrawn
        setShowPopup(true);
    
    }else{
      setShowPopup(false)
      setError(true);
    }
       
  };

  const handleAmountChange = (e) => {
    setWithdrawAmount(e.target.value);
  };

  const closePopup = () => {
    setShowPopup(false);
    setError(false)
  };

  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }} // Replace with your background image path
    >
      <div className="bg-white bg-opacity-70 p-8 rounded-lg shadow-lg">
        <h4 className="text-3xl font-bold text-red-500 mb-4">Withdraw Money</h4>
        <form onSubmit={handleWithdraw}>
          <div className="mb-3">
            <label htmlFor="withdrawAmount" className="form-label text-lg text-gray-800">Amount</label>
            <input
              type="number"
              className="form-control text-lg p-2 border rounded"
              id="withdrawAmount"
              placeholder="Enter amount"
              value={withdrawAmount}
              onChange={handleAmountChange}
              required
            />
          </div>
          <button type="submit" className="bg-red-400 rounded text-white hover:bg-red-700 w-full text-lg py-2 ">Withdraw</button>
        </form>
      </div>

      {/* Popup Modal */}
      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-bold text-green-600">Withdrawal Successful!</h3>
            <p className="text-lg text-gray-700 mt-2">You have withdrawn <strong>
              <FaRupeeSign className='inline h-6'/>{withdrawAmount}</strong></p>
            <button
              className="mt-4 px-6 py-2 bg-blue-500 text-white rounded shadow hover:bg-blue-600"
              onClick={closePopup}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {error && (
        <div className='fixed inset-0 flex justify-center items-center bg-black bg-opacity-50'>
         <div className='bg-white p-6 rounded-lg text-center shadow-lg'>
          <h3 className='text-2xl font-bold text-red-600 '>Insufficient Fund!</h3>
          <button className='mt-4 px-6 py-2 bg-red-500 text-white rounded shadow hover:bg-red-600' 
          onClick={closePopup}>
           Close
          </button>
         </div>
          </div>
      )}
    </div>
  );
}

export default WithdrawMoney;
