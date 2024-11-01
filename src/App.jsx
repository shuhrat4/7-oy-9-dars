import React from 'react';
import './App.css';
import { Link, Navigate, Route, Routes, useLocation } from 'react-router-dom';
import { Home, Add, Single,  } from './pages';
import Login from './pages/Login';

function App() {
  const {pathname} = useLocation()
  return (
    <>
      { pathname.includes('Login') ? "" : <header className='py-5 bg-slate-200 flex items-center justify-center gap-5'>
        <Link className="font-bold text-[20px]" to={"/Home"}>Home</Link>
        <Link className="font-bold text-[20px]" to={"/add"}>Create</Link>
      </header>}
      
      <Routes>
        <Route path="/" element={<Navigate to="/Login" />} />
        <Route path="/add" element={<Add />} />
        <Route path="/id" element={<Single />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Home" element={<Home/>} />
      </Routes>
    
    </>
  )
}

export default App;
