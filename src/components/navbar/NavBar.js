import React, { useState  } from 'react';
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import './style.css'
import Logo from '../../assets/image/navbar.png'
import Swal from 'sweetalert2';

const NavBar = () => {
    const [isResponsive, setIsResponsive] = useState(false);

    const toggleResponsive = () => {
        setIsResponsive(prevState => !prevState);
    };

    const handleLogout = () => {
        Swal.fire({
            title: 'Sign Out',
            text: 'Apakah Anda yakin untuk keluar?',
            showDenyButton: true,
            confirmButtonText: 'Ya',
            denyButtonText: `Tidak`,
            confirmButtonColor: '#03689f',
            denyButtonColor: '#E15E21',
        }).then((result) => {
            if (result.isConfirmed) {
                sessionStorage.removeItem('token');
                sessionStorage.removeItem('tokenExpiration');
                window.location.href = '/login';
            } else if (result.isDenied) {
                Swal.fire('Dibatalkan!', 'Proses Sign Out dibatalkan.', 'info')
            }
        })
        
    };

    return (
        <div>
            <div className="nav">
                <div className="navBarContent">
                    <img src={ Logo } alt="Logo Jakomkris" draggable="false" />
                    <div className={`link ${isResponsive ? 'responsive' : ''}`} id="myTopnav">
                        <CustomLink to="/">Beranda</CustomLink>
                        <CustomLink to="/data">Data</CustomLink>
                        <CustomLink to="/peta">Peta</CustomLink>
                        <CustomLink to="/dashboard">Dashboard</CustomLink>
                        <CustomLink to="/gempa">Gempa</CustomLink>
                        <CustomLink to="/forum">Forum</CustomLink>
                        <CustomLink to="/galeri">Galeri</CustomLink>
                        <CustomLink to="/about">About</CustomLink>
                        <div className="signOut" onClick={handleLogout}>Sign Out</div>
                        <button id='signOut' onClick={handleLogout}>Sign Out</button>
                        <div id='menu' className="icon" onClick={toggleResponsive}>
                            <i className="fa fa-bars"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="space"></div>
        </div>
    )
}

export default NavBar

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname })
    return (
        <Link to={to} className={isActive ? "active" : ""} {...props}>{children}</Link>
    )
}