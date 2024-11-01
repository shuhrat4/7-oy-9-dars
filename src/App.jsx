import React from 'react';
import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import { Home, Add, Single } from './pages';
import Login from './pages/Login';

function App() {
  return (
    <>
    <header className='py-5 bg-slate-200 flex items-center justify-center gap-5'>
      <Link className="font-bold text-[20px]"to={"/"}>Home</Link>
      <Link className="font-bold text-[20px]"to={"/add"}>Create</Link>
      <Link className="font-bold text-[20px]"to={"/login"}>Login</Link>
    </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<Add />} />
        <Route path="/id" element={<Single />} />
        <Route path="/login" element={<Login />} />
      </Routes>

    </>
  )
}

export default App;
