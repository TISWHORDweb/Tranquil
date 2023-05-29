import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { MyContextProvider } from './context/Context';
import Login from './pages/Login';
import Register from './pages/Register';

  function App() {
    return (
      <BrowserRouter>
        <MyContextProvider>
          <div className="App">
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/auth/login' element={<Login />} />
              <Route path='/auth/register' element={<Register />} />
            </Routes>
          </div>
        </MyContextProvider>

      </BrowserRouter>
    );
  }

export default App;
