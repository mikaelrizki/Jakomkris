import React from 'react';
import { Link as RouterLink } from 'react-router-dom'
import { Link as ScrollLink } from 'react-scroll';
import './style.css'
import LogoAll from '../../assets/image/all_logo.png'
import WhatsApp from '../../assets/icon/ic_whatsapp.png';
import Instagram from '../../assets/icon/ic_instagram.png';
import Email from '../../assets/icon/ic_email.png';
import YouTube from '../../assets/icon/ic_youtube.png';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div id="content">
                    <div className="start blue-signature">
                        <img src={LogoAll} alt="Logo JAKOMKRIS, GKJ, dan UKDW" draggable="false" />
                        <h2>Jejaring Komunitas Kristen</h2>
                        <h2>Penanggulangan Bencana di Indonesia</h2>
                        <h3>Berkolaborasi Dengan Gereja Kristen Jawa dan</h3>
                        <h3>Universitas Kristen Duta Wacana</h3>
                    </div>
                    <div className="mid">
                        <div>
                            <h2 className="blue-signature">Menu</h2>
                            <div className="menu">
                                <div className="fcol">
                                    <ScrollLink to="greetings">Beranda</ScrollLink>
                                    <ScrollLink to="article">Artikel</ScrollLink>
                                    <ScrollLink to="maps">Peta Gereja</ScrollLink>
                                </div>
                                <div className="scol">
                                    <RouterLink to="/data">Data Gereja</RouterLink>
                                    <RouterLink to="/dashboard">Dashboard</RouterLink>
                                    <RouterLink to="/">Forum Diskusi</RouterLink>
                                </div>
                                <div className="lcol">
                                    <RouterLink to="/">Galeri</RouterLink>
                                    <RouterLink to="/">Tentang Kami</RouterLink>
                                    <RouterLink to="/">Pengaturan</RouterLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="end">
                        <h2 className="blue-signature">Kontak Kami!</h2>
                        <a href="https://wa.me/6287775972032">
                            <img src={WhatsApp} className="logo" alt="Icon WhatsApp" draggable="false" />
                            <span>0821-3277-7272</span>
                        </a>
                        <a href="https://www.instagram.com/jakomkrispbi">
                            <img src={Instagram} className="logo" alt="Icon Instagram" draggable="false" />
                            <span>@jakomkrispbi</span>
                        </a>
                        <a href="mailto:jakomkris@gmail.com">
                            <img src={Email} className="logo" alt="Icon E-mail" draggable="false" />
                            <span>jakomkris@gmail.com</span>
                        </a>
                        <a href="https://www.youtube.com/@jakomkrispbi6699">
                            <img src={YouTube} className="logo" alt="Icon YouTube" draggable="false" />
                            <span>Jakomkris PBI</span>
                        </a>
                    </div>
                </div>
            </div>
            <div id="origin">
                <p>2023 Gereja Tangguh Bencana JAKOMKRIS. All rights reserved. <u>Terms of use</u> | <u>Privacy policy</u></p>
            </div>
        </div>
    )
}

export default Footer