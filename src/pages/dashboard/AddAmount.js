import React, { useContext, useState } from 'react'
import { UserContext } from '../../UserContext'
import { FaRupeeSign } from 'react-icons/fa';

const AddAmount = () => {
    const [addAmount ,setAddAmount ] = useState('')
    const [showPopup, setShowPopup] = useState(false);
    
    //add money function from userContext.js 
    const {addMoney , balance} = useContext(UserContext)

    //form submit function 
    const handleFormSubmit =(e) =>{
     e.preventDefault();

     const amount = parseFloat(addAmount)
     if(amount > 0 ){
        addMoney(amount)// balance from UserContext.js will get updated using addMoney
        setShowPopup(true);
  
     }else{
        alert('please enter valid amount')
     }
    }

    const handleAmountChange =(e) =>{
     setAddAmount(e.target.value)
    }

    const closePopup =() =>{
        setShowPopup(false)
    }

    return (
        <div className='flex justify-center items-center h-screen bg-center'>
            <div className='bg-white -bg-opacity-70 p-8 rounded-lg shadow-lg'>
                <h4 className='text-3xl font-bold text-pink-600 mb-4'>Add Amount</h4>

                <p className="text-xl text-gray-800">
          Your current balance is <span className="text-green-900 font-bold">
            <FaRupeeSign className="inline h-6" /> {balance}
          </span></p>


                <form onSubmit={handleFormSubmit}>
                    <div className='mb-3'>
                        <lable htmlFor='addAmount' className='form-label text-lg 
                text-gray-800'></lable>
                        <input
                            type='number'
                            className='form-control text-lg p-2 border rounded'
                            id='addAmount'
                            placeholder='Enter Amount'
                            value={addAmount}
                               onChange={handleAmountChange}
                            required
                        />
                    </div>
                    <button type="submit" className="bg-pink-500 hover:bg-pink-800 rounded text-white w-full text-lg py-2">Add</button>
                </form>
            </div>
    {/* Popup Modal */}
    {showPopup && (
        <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg text-center shadow-lg">
            <h3 className="text-2xl font-bold text-green-600">Deposit Successful!</h3>
            <p className="text-lg text-gray-700 mt-2">
              You have added <strong><FaRupeeSign className='inline h-6'/>{addAmount}</strong>
            </p>
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
    )
}

export default AddAmount
