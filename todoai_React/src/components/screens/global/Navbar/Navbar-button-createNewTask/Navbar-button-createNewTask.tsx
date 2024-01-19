import React from "react";
import styles from './Navbar-button-createNewTask.module.css'
import navbarStyles from '../Navbar.module.css'
import { useNavigate } from "react-router-dom";

const NavbarButtonCreateNewTask: React.FC = () => {

    const navigate = useNavigate()

    function handleClick() {
        navigate('/')
    }
    return (
        <button className={`${navbarStyles.navbarBtn} ${styles.btn}`} onClick={handleClick}>CREATE TASK</button>
    );
};


export default NavbarButtonCreateNewTask;