import React, { useState } from "react";
import styles from './Navbar-button-createNewTask.module.css'
import navbarStyles from '../Navbar.module.css'
import CreateTaskPanel from "../../../Tasks/CreateTaskPanel/CreateTaskPanel";

const NavbarButtonCreateNewTask: React.FC = () => {
    const [showPanel, setShowPanel] = useState(false)

    const handleClick = () => {
        setShowPanel(prev => !prev)
    }
    return (
        <>
        <button className={`${navbarStyles.navbarBtn} ${styles.btn}`} onClick={handleClick}>CREATE TASK</button>
        {showPanel && <CreateTaskPanel />}
        </>
    );
};


export default NavbarButtonCreateNewTask;