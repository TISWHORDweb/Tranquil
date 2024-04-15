// MyContext.js
import axios from 'axios';
import React, { createContext, useCallback, useEffect, useState } from 'react';
import { USER_BASE_URL } from '../Datas/data';
export const MyContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [data, setData] = useState('close');
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [type, setType] = useState(null);
  const [patients, setPatients] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredPatients, setFilteredPatient] = useState([]);
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

  useEffect(() => {
    if(type && token){
      const url = `${USER_BASE_URL}/${type}/patient/all`
      axios.get(url, {
        headers: {
          'Content-Type': 'application/json;charset=UTF-8',
          "Access-Control-Allow-Origin": "*",
          "t-token": token
        }
      })
        .then((res) => {
          const response = res.data.data
          setPatients(response);
        })
        .catch((err) => console.log(err));
  
    }
  }, [type,token])

  const updateSearchQuery = (newQuery) => {
    if (!newQuery) {
      setFilteredPatient('');
      console.log("in")
    }
    setSearchQuery(newQuery);
    filterPatients(newQuery); // Trigger filtering based on new query
  };

  const filterPatients = useCallback((newQuery) => {
    if (!newQuery) {
      setFilteredPatient('');
    }
    const filtered = patients.filter((patient) => {
      // Adjust search logic as needed
      return patient.hid.toLowerCase().includes(newQuery.toLowerCase());
    });
    setFilteredPatient(filtered);
  }, [patients]);

  useEffect(() => {
    let hasRun = false;
    if (!hasRun && patients) {
      filterPatients('');
      hasRun = true;
    }
  }, [patients, filterPatients]);

  useEffect(() => {
    // Filter whenever searchQuery changes
    filterPatients(searchQuery);
  }, [searchQuery, filterPatients]);

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
      type,
      token,
      searchQuery,
      updateSearchQuery,
      filteredPatients
    }}>

      {children}
    </MyContext.Provider>
  );
};