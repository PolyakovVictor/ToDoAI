import React, { useState } from "react";
import styles from './Navbar-button-register.module.css'
import navbarStyles from '../Navbar.module.css'
import { useNavigate } from "react-router-dom";
import AuthPanel from "../../AuthPanel/AuthPanel";

const navbarButtonRegister: React.FC = () => {
    const navigate = useNavigate()
    const [showAuth, setShowAuth] = useState(false)

    const toggleAuth = () => {
        setShowAuth(prev => !prev)
    }

    return (
        <>
        <button className={navbarStyles.navbarBtn} onClick={toggleAuth}> REGISTRATION </button>
        {showAuth && <AuthPanel defaultFormType="register" />}
        </>
    );
};


export default navbarButtonRegister;