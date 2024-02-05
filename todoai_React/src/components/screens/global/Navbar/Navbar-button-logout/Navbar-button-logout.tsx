import React from "react";
import styles from './Navbar-button-logout.module.css'
import navbarStyles from '../Navbar.module.css'
import { useNavigate } from "react-router-dom";
import { AuthService } from "../../../../../service/auth.service";

const navbarButtonLogout: React.FC = () => {
    const navigate = useNavigate()

    function handleClick() {
        AuthService.logout()
        navigate('/')
    }

    return (
        <button className={navbarStyles.navbarBtn} onClick={handleClick}> LOGOUT </button>
    );
};


export default navbarButtonLogout;