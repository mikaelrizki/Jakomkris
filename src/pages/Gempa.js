import React from 'react'
import { Navigate } from 'react-router-dom'
import { isTokenExpired } from '../utils/Utils'
import NavBar from '../components/navbar/NavBar';
import GempaComponents from '../components/gempa/Gempa'
import Footer from '../components/footer/Footer';

const Gempa = () => {
    if (isTokenExpired()) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('tokenExpiration');
        // console.log('Token has expired');
    }

    const token = sessionStorage.getItem('token');
    if (token) {
        return (
            <div>
                <NavBar />
                <GempaComponents />
                <Footer />
            </div>
        );
    } else {
        return (
            <Navigate to="/login" replace={true} />
        )
    }
}

export default Gempa
