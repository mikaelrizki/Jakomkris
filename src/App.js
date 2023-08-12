import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Beranda from './pages/Beranda'
import Login from './pages/Login'
import Register from './pages/Register'
import DataGereja from './pages/DataGereja'
import About from './pages/About'
import Peta from './pages/Peta'
import Dashboard from "./pages/Dashboard"
import Gempa from './pages/Gempa'
import Forum from './pages/Forum'

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
        <Route path="/gempa" element={ <Gempa/> } />
        <Route path="/forum" element={ <Forum/> } />
        <Route path="/galeri" element={ <DataGereja/> } />
        <Route path="/data" element={ <DataGereja/> } />
        <Route path="/about" element={ <About/> } />
      </Routes>
    </Router>
  );
}

export default App