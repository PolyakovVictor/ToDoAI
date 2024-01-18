import React from "react";
import styles from './Navbar-button-register.module.css'
import { useNavigate } from "react-router-dom";

const navbarButtonRegister: React.FC = () => {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }
    return (
        <button className={styles.navbarBtn} onClick={handleClick}> REGISTRATION </button>
    );
};


export default navbarButtonRegister;