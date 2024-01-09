import React from "react";
import styles from './Navbar-button.module.css'

const navbarButton: React.FC = () => {
    return (
        <button className={styles.navbarBtn}> AUTH </button>
    );
};


export default navbarButton;