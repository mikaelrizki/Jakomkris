import React from 'react'
import { Navigate } from 'react-router-dom'
import { isTokenExpired } from '../utils/Utils'
import NavBar from '../components/navbar/NavBar';
import Maps from '../components/peta/Peta'
import Footer from '../components/footer/FooterBeranda';

const Peta = () => {
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
                <Maps />
                <Footer />
            </div>
        );
    } else {
        return (
            <Navigate to="/login" replace={true} />
        )
    }
}

export default Peta
