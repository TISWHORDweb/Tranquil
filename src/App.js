import './App.css';
import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import { MyContextProvider } from './context/Context';
import { Routes } from './Config/routes';
function App() {
  return (
    <BrowserRouter>
      <MyContextProvider>
        <div className="App">
          <Routes />
        </div>
      </MyContextProvider>

    </BrowserRouter>
  );
}

export default App;
