import React from "react";
import styles from './Navbar-button-logout.module.css'
import navbarStyles from '../Navbar.module.css'

const navbarButtonLogout: React.FC = () => {

    function handleClick() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

    return (
        <button className={navbarStyles.navbarBtn} onClick={handleClick}> LOGOUT </button>
    );
};


export default navbarButtonLogout;