import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Menu } from './Pages/Menu'
import { Home } from './Pages/Home'
import { BrowserRouter as Router, Routes, Route, BrowserRouter, Link, NavLink } from 'react-router-dom'
import { Navigate } from 'react-router-dom'
import { OrderPage } from './Pages/OrderPage'
import { Chatbot } from './Pages/Chatbot'

function App() {
  

  return (
    <BrowserRouter>
    
    <nav className="navbar navbar-expand-sm ">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">Navbar</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/menu">Menu</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/order">Order</NavLink>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown link
          </a>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/order">Order</NavLink></li>
            <li><NavLink className="dropdown-item" to="/chatbot">Chatbot</NavLink></li>
            
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
      <Routes>
        <Route path="/menu" element={<Menu />} />
          <Route path="*" element={<Navigate to="/menu" replace />} /> 
          <Route path="/" element={<Home />} /> 
          <Route path="/order" element={<OrderPage />} />
           <Route path="/chatbot" element={<Chatbot />} /> 
      </Routes>
    </BrowserRouter>
  )
}

export default App
