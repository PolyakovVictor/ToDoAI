import React from "react";
import styles from './Navbar-button-logout.module.css'
import navbarStyles from '../Navbar.module.css'
import { useNavigate } from "react-router-dom";

const navbarButtonLogout: React.FC = () => {
    const navigate = useNavigate()

    function handleClick() {
        localStorage.removeItem('accessToken');
        localStorage.removeItem('refreshToken');
        navigate('/')
    }

    return (
        <button className={navbarStyles.navbarBtn} onClick={handleClick}> LOGOUT </button>
    );
};


export default navbarButtonLogout;