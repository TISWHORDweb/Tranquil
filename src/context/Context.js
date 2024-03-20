// MyContext.js
import React, { createContext, useState } from 'react';

export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [show, setShow] = useState();

  const updateData = (newValue) => {
    setData(newValue);
  };

  const Display = () => {
    setShow("block");
  };

  return (
    <MyContext.Provider value={{ data, updateData }}>
      {children}
    </MyContext.Provider>
  );
};