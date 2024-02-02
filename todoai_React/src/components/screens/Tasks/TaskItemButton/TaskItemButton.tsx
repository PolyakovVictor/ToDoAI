import React, { useState } from "react";
import styles from './TaskItemButton.module.css'

const TaskItemButton: React.FC = () => {
    const [showAuth, setShowAuth] = useState(false)

    const toggleAuth = () => {
        setShowAuth(prev => !prev)
    }

    return (
        <>
            <button className={styles.btn} onClick={toggleAuth}>complete</button>
        </>
    );
};


export default TaskItemButton;