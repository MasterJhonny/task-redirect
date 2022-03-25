import React, { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";

import './App.css'

import { Header } from './components/Layout/Header/Header'
import { Home } from './components/Pages/Home/Home'
import { Add } from './components/Pages/Add/Add'; 
import { CreateAlarm } from './components/Pages/Add/CreateAlarm'

function App() {
  const [count, setCount] = useState(0)

  return (

    <React.Fragment>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/add" element={<Add/>}/>
        </Routes>
    </React.Fragment>
  )
}

export default App
