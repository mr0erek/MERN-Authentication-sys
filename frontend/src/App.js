import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Home from './pages/Home';
import RefreshHandler from './RefreshHandler';
import { useState } from 'react'
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const PrivateRoute = ({element})=>{
    return isAuthenticated ? element : <Navigate to="/login"/> //if isAuthenticated is true then element will pass else Navigate to will pass
  }
  return (
    <div className="App">
    <RefreshHandler setIsAuthenticated={setIsAuthenticated}/>
    <Routes>
    {/*<h1>App is in progress</h1> */}
    <Route path='/' element={<Navigate to="/login"/>} />  {/* base route, Navigate is a component of react-router-dom */  }
    <Route path='/login' element={<Login />}/>
    <Route path='/signup' element={<Signup />}/>
    <Route path='/home' element={<PrivateRoute element={<Home />}/>} />
    </Routes>
    </div>
  );
}

export default App;
