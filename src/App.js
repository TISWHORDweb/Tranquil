import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import { MyContextProvider } from './context/Context';

  function App() {
    return (
      <BrowserRouter>
        <MyContextProvider>
          <div className="App">
            <Routes>
              <Route path='/' element={<Dashboard />} />
            </Routes>
          </div>
        </MyContextProvider>

      </BrowserRouter>
    );
  }

export default App;
