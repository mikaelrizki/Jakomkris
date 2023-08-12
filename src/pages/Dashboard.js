import React from 'react'
import { Navigate } from 'react-router-dom'
import { isTokenExpired } from '../utils/Utils'
import NavBar from '../components/navbar/NavBar'
import DashboardComponent from '../components/dashboard/Dashboard'
import Footer from '../components/footer/Footer'

const Dashboard = () => {
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
                <DashboardComponent />
                <Footer />
            </div>
        );
    } else {
        return (
            <Navigate to="/login" replace={true} />
        )
    }
};

export default Dashboard
