import React, { useEffect, useState } from "react";
import './style.css'
import LogoJakomkris from '../../assets/image/logo_jakomkris.png'
import Cover from '../../assets/image/cover_gereja.png';

const Header = () => {
    const [greeting, setGreeting] = useState("");

    useEffect(() => {
        const currentTime = new Date().getHours();
        if (currentTime >= 2 && currentTime < 10) {
            setGreeting("Selamat Pagi!");
        } else if (currentTime >= 10 && currentTime < 15) {
            setGreeting("Selamat Siang!");
        } else if (currentTime >= 15 && currentTime < 18) {
            setGreeting("Selamat Sore!");
        } else {
            setGreeting("Selamat Malam!");
        }
    }, []);

    return (
        <div className="header">
            <div id="greetings">
                <img src={LogoJakomkris} id="logo" alt="Logo JAKOMKRIS" draggable="false" />

                <h1 className="blue-signature s0" id="greetings-time">{greeting}</h1>
                <h1 className="orange-signature s2">Selamat Datang di Situs Gereja Tangguh Bencana</h1>
                <p className="gray">Situs ini memuat data Gereja di Indonesia untuk mitigasi dan informasi terkait bencana alam.</p>

                <form action="POST" id="search">
                    <input type="text" id="namaGereja" placeholder="Cari Gereja ..." />
                    <div></div>
                    <select name="provinsi" id="prov" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Provinsi</option>
                    </select>
                    <div></div>
                    <select name="kabupaten" id="kab" defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled>Kabupaten</option>
                    </select>
                    <button>Temukan!</button>
                </form>

                <div id="count">
                    <div>
                        <h3 className="s1">300+</h3>
                        <h4>Gereja Terdaftar</h4>
                    </div>
                    <div>
                        <h3 className="s1">24+</h3>
                        <h4>Provinsi Tercakupi</h4>
                    </div>
                    <div>
                        <h3 className="s1">12,875,123</h3>
                        <h4>Data Jemaat Gereja</h4>
                    </div>
                </div>
            </div>
            <div id="cover">
                <img src={Cover} alt="Ilustrasi Gambar Gereja" draggable="false" />
            </div>
        </div>
    )
}

export default Header