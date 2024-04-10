import './App.css';
import React, { useEffect, useState } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { MyContextProvider } from './context/Context';
import SessionExpireModal from './components/SessionExpireModal';
import { Routes } from './Config/routes';
import { Check } from './Utils/Core'

function App() {
  const [expired, setexpired] = useState(false)
  const Checks = Check()
  useEffect(() => {
    if (!Checks) {
      setexpired(true)
    }
  },[Checks])
  return (
    <BrowserRouter>
      <MyContextProvider>
        <div className="App">
          {expired ? <SessionExpireModal /> : <></>}
          <Routes />
        </div>
      </MyContextProvider>

    </BrowserRouter>
  );
}

export default App;
