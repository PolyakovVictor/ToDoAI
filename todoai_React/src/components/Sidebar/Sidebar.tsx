import React from 'react';
import styles from './Sidebar.module.css'

interface NavbarProps {
  children?: React.ReactNode;
}

const Sidebar: React.FC<NavbarProps> = ({ children }) => {
    return (
        <div className={styles.sidebar}>{children}</div>
    )
}


export default Sidebar;