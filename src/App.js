import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Beranda from './pages/Beranda'
import Login from './pages/Login'
import Register from './pages/Register'
import DataGereja from './pages/DataGereja'
import Peta from './pages/Peta'
import Dashboard from "./pages/Dashboard"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Beranda/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/data" element={ <DataGereja/> } />
        <Route path="/peta" element={ <Peta/> } />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/gempa" element={ <DataGereja/> } />
        <Route path="/forum" element={ <DataGereja/> } />
        <Route path="/galeri" element={ <DataGereja/> } />
        <Route path="/data" element={ <DataGereja/> } />
        <Route path="/about" element={ <DataGereja/> } />
      </Routes>
    </Router>
  );
}

export default App