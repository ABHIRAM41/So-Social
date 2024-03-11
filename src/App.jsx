import { useState } from 'react'
import Home from './pages/Home'
import './App.css'
import {Routes, Route} from 'react-router-dom';
import Profile from './pages/Profile'
import Register from './pages/Register/Register';
import Login from './pages/Login/Login';
function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App
