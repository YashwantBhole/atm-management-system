import React, { useContext, useState } from 'react';
import { FaRupeeSign, FaInfoCircle } from 'react-icons/fa';
import { UserContext } from '../../UserContext';
import { FaSmile } from 'react-icons/fa';

function TransactionHistory() {
const {transactions } = useContext(UserContext)
const [showPopup, setShowPopup] = useState(false)
const showDetails =() =>{
  setShowPopup(true)
  
}
const closePopup = () =>{
  setShowPopup(false)
}
  return (
    <div
      className="flex justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }} // Replace with your background image path
    >
      <div className="bg-white bg-opacity-70 p-4  rounded-lg shadow-lg  ">
        <h4 className="text-3xl font-bold text-orange-600 mb-4">Transaction History</h4>
        <ul className="list-none m-0 p-0">
          <li className="animate-fade-in mb-2 flex flex-wrap justify-between items-center space-x-4">
            <span className="font-semibold flex items-center">
              <FaRupeeSign className="mr-1" /> 1000
            </span>
            
            <span className="text-gray-600">1/9/2024, 18:45:21 PM</span>
            <FaInfoCircle className="text-orange-500 ml-2 cursor-pointer" title="Transaction details" onClick={showDetails}/>
          </li>
          <li className="animate-fade-in mb-2 flex justify-between items-center">
            <span className="font-semibold flex items-center">
              <FaRupeeSign className="mr-1" /> 500
            </span>
            <span className="text-gray-600">12/9/2024, 12:30:31 PM</span>
            <FaInfoCircle className="text-orange-500 ml-2 cursor-pointer" title="Transaction details" onClick={showDetails}/>
          </li>
          {/* Add more transactions with the same animation */}
          {transactions.map( (transaction , index) => (
                      <li className="animate-fade-in mb-2 flex justify-between items-center" key={index}>
                      <span className="font-semibold flex items-center">
                        <FaRupeeSign className="mr-1" /> {transaction.amount}{transaction.addAmount} {/*either withdrawl or deposit */}
                      </span>
                      <span className="text-gray-600">{transaction.date}</span>
                      <FaInfoCircle className="text-orange-500 ml-2 cursor-pointer" title="Transaction details" onClick={showDetails}/>
                    </li>
          ))}
        </ul>
      </div>
      

      {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-bold text-green-600">Unknown Transactions !</h3>
            
            <FaSmile className="text-6xl text-yellow-500 mr-1 mx-auto block" />
            <button
              className="mt-4 px-6 py-2 bg-orange-500 text-white rounded shadow hover:bg-orange-600"
              onClick={closePopup}
            >
              Close
            </button>
            </div>
            </div>
      )};
    </div>
  );
}

export default TransactionHistory;
