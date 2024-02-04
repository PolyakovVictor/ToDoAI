import React, { useState } from "react";
import styles from './Navbar-button-login.module.css'
import navbarStyles from '../Navbar.module.css'
import AuthPanel from "../../AuthPanel/AuthPanel";

const navbarButtonLogin: React.FC = () => {
    const [showAuth, setShowAuth] = useState(false)

    const toggleAuth = () => {
        setShowAuth(prev => !prev)
    }
    return (
        <>
        <button className={navbarStyles.navbarBtn} onClick={toggleAuth}> LOGIN </button>
        {showAuth && <AuthPanel onClose={toggleAuth} />}
        </>
    );
};


export default navbarButtonLogin;