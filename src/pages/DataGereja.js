import React from 'react'
import { Link } from 'react-router-dom'
import NavBar from '../components/navbar/NavBar';

const DataGereja = () => {
    return (
        <div>
            <NavBar />
            <h1>Welcome to the Home Page</h1>
            <Link to="/">Go to Gereja Page</Link>
        </div>
    );
};

export default DataGereja