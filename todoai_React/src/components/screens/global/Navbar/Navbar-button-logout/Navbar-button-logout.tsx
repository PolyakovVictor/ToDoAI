import React from "react";
import styles from './Navbar-button-logout.module.css'

const navbarButtonLogout: React.FC = () => {

    function handleClick() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
    }

    return (
        <button className={styles.navbarBtn} onClick={handleClick}> LOGOUT </button>
    );
};


export default navbarButtonLogout;