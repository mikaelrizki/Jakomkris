// Login.js
import React, { useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { isTokenExpired } from '../utils/Utils'
import '../components/login/style.css'
import axios from 'axios'
import LogoJakomkris from '../assets/image/logo_jakomkris.png'
import Email from '../assets/icon/ic_email.png'
import Password from '../assets/icon/ic_pass.png'
import Swal from 'sweetalert2'

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(process.env.REACT_APP_API_KEY + "api/login", {
                email: email,
                password: password,
            });

            const { token } = response.data.data;
            const expirationTime = Date.now();

            sessionStorage.setItem('token', token);
            sessionStorage.setItem('tokenExpiration', expirationTime.toString());

            window.location.href = '/';
        } catch (error) {
            console.error('Login failed:', error.response.data.message);
            Swal.fire({
                icon: 'error',
                title: 'Login Gagal',
                text: "Email / Password Salah!",
                confirmButtonColor: '#03689f',
                iconColor: '#E15E21'
            })
        }
    };

    if (isTokenExpired()) {
        sessionStorage.removeItem('token');
        sessionStorage.removeItem('tokenExpiration');
        // console.log('Token has expired');
    }

    const token = sessionStorage.getItem('token');
    if (token) {
        return (
            <Navigate to="/" replace={true} />
        )
    } else {
        return (
            <div className='loginCard'>
                <img src={LogoJakomkris} id="login" alt="Logo JAKOMKRIS" draggable="false" />
                <form onSubmit={handleSubmit} className='loginForm'>
                    <div className="formField">
                        <div className='icon'>
                            <img src={Email} className="iconLogin" alt="Icon E-mail" draggable="false" />
                        </div>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    
                    <div className="formField">
                        <div className='icon'>
                            <img src={Password} className="iconLogin" alt="Icon Password" draggable="false" />
                        </div>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button id='btnLogin' type="submit">SIGN IN</button>
                    <p className='bpa'>Belum Punya Akun? <Link to="/register">Sign Up</Link></p>
                </form>
            </div>
        );
    }
};

export default Login
