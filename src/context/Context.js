// MyContext.js
import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
import { USER_BASE_URL } from '../Datas/data';
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('');
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [type, setType] = useState(null);
  const [userLoggedIn, setUserLoggedIn] = useState(false)

  const updateData = (newValue) => {
    setData(newValue);
  };


  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('userData'));
    let hasRun = false;
    let types
    if (!hasRun && data) {
      const number = data.type
      console.log(number)
      if (number === 1) {
        types = "admin";
      } else if (number === 2) {
        types = "employee";
      } else if (number === 3) {
        types = "patient";
      }
      
      localStorage.setItem('userType', types);

      setToken(data.token);
      setUser(data)
      setType(types)
      hasRun = true;
    } else {
      setToken("");
      setUser(null)
      setType("")
    }
  }, [setToken, setUser]);

  const checkAuth = async () => {
    try {
      if (token) {

        const urls = `${USER_BASE_URL}/${type}/details`;
        axios.get(urls, {
          headers: {
            'Content-Type': 'application/json;charset=UTF-8',
            "Access-Control-Allow-Origin": "*",
            "t-token": token
          }
        })
          .then((res) => {
            console.log("Active")
          })
          .catch((error) => {
            if (error.response.data.message === `Invalid or expired token, Use a valid token and try again`) {
              setUserLoggedIn(false)
              setUser(null)
              localStorage.setItem('userLoggedIn', false);
            }
          });
      }
    } catch (error) {
      console.error("in here" + error);
      // Handle errors (e.g., display error message)
    }
  };


  return (
    <MyContext.Provider value={{
      data,
      updateData,
      user,
      userLoggedIn,
      checkAuth,
      type
    }}>

      {children}
    </MyContext.Provider>
  );
};