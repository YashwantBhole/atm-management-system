import React, { createContext, useState, useEffect } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create a provider component
export const UserProvider = ({ children }) => {
const [balance , setBalance ] = useState(5000);
const [transactions ,setTransactions] = useState([]);


const withdrawMoney = (amount) => {
  if( amount <= balance){
    setBalance( balance - amount);
    setTransactions([...transactions , {amount , date : new Date().toLocaleString(),  }]);
  }else{
    alert('Insufficient Funds !')
  }
}

const addMoney = (addAmount) =>{
  setBalance(balance + addAmount)
  setTransactions([...transactions, { type: 'Deposit', addAmount, date: new Date().toLocaleString() }])
}
  const [user, setUser] = useState(() => {
    // Initialize from localStorage if available
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  // Save the user data to localStorage whenever it changes
  useEffect(() => {
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser , balance , transactions , withdrawMoney , addMoney}}>
      {children}
    </UserContext.Provider>
  );
};
