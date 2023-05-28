// MyContext.js
import React, { createContext, useState } from 'react';

// Create the context
export const MyContext = createContext();

// Create a provider component
export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('');

  // Function to update the data value
  const updateData = (newValue) => {
    setData(newValue);
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};