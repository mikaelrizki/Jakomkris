import React from 'react'
import { Navigate } from 'react-router-dom'
import { isTokenExpired } from '../utils/Utils'
import Header from '../components/header/Header'
import Article from '../components/article/Article'
import Footer from '../components/footer/FooterBeranda'
import Maps from '../components/maps/Maps'
import MapsComponents from '../components/peta/PetaBeranda'
import NavBarBeranda from '../components/navbar/NavBarBeranda'

const Beranda = () => {
    if (isTokenExpired()) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('tokenExpiration');
        // console.log('Token has expired');
    }

    const token = sessionStorage.getItem('token');
    if (token) {
        return (
            <div className="beranda">
                <NavBarBeranda />
                <Header />
                <Article />
                <Maps />
                <MapsComponents />
                <Footer />
            </div>
        );
    } else {
        return (
            <Navigate to="/login" replace={true} />
        )
    }
};

export default Beranda
