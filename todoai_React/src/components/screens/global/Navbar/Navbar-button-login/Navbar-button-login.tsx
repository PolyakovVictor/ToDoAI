import React, { useState } from "react";
import styles from './Navbar-button-login.module.css'
import AuthPanel from "../../../Home/AuthPanel/AuthPanel";

const navbarButtonLogin: React.FC = () => {
    const [showAuth, setShowAuth] = useState(false)

    const toggleAuth = () => {
        setShowAuth(prev => !prev)
    }
    return (
        <>
        <button className={styles.navbarBtn} onClick={toggleAuth}> LOGIN </button>
        {showAuth && <AuthPanel />}
        </>
    );
};


export default navbarButtonLogin;