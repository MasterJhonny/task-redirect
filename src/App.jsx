import React, { useState, useEffect } from 'react'
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import { isAuthent } from "./components/hooks/useFech";

import './App.css'
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Layout/Header/Header'
import { Home } from './components/Pages/Home/Home'
import { Add } from './components/Pages/Add/Add'; 
import { Register } from './components/Pages/auth/Register'
import { Login } from './components/Pages/auth/Login';
import { Loanding } from "./components/Loanding";
import { Schedule } from "./components/Pages/Schedule";

function App() {
  const [data, setData] = useState({ auth: false });

  const [loanding, setLoanding] = useState(true);

  setTimeout(() => {
    setLoanding(false);
  }, 2000) 

  useEffect(() => {
    isAuthent(setData);
  }, [])

  return (

    <React.Fragment>
        <Header user={data} setData={setData}/>
        <Routes>
          <Route path="/" element={ data.auth ? <Home user={data} /> : loanding ? <Loanding/> : <Navigate to="/login"/> }/>
          <Route path="/add" element={<Add user={data}/>}/>
          <Route path="/register" element={<Register setData={setData}/>}/>
          <Route path="/login" element={<Login setData={setData}/>}/>
          <Route path="/schedule" element={<Schedule user={data}/>}/>
        </Routes>
        <ToastContainer/>
    </React.Fragment>
  )
}

export default App
