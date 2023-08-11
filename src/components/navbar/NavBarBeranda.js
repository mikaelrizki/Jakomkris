import React, { useState } from 'react'
import './styleNavBarBeranda.css'
import NavBar from './NavBar'

const NavBarBeranda = () => {
    const [isNavBarVisible, setIsNavBarVisible] = useState(false);

    const toggleNavBar = () => {
        setIsNavBarVisible(prevState => !prevState);
    };

    return (
        <div>
            <div id='expandMore' onClick={toggleNavBar}>
                <span className="material-symbols-outlined">
                    {isNavBarVisible ? "expand_less" : "expand_more"}
                </span>
            </div>
            <div id="navBarContainer">
                {isNavBarVisible && <NavBar />}
            </div>
        </div>
    );
}

export default NavBarBeranda