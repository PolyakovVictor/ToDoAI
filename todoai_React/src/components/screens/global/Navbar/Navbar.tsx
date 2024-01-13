import React from 'react';
import styles from './Navbar.module.css'


const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav className={styles.nav}>
      <h1 className={styles.h1}>To Do AI</h1>
      { children }
    </nav>
  );
};

export default Navbar;