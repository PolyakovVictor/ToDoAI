import React from 'react';
import styles from './Navbar.module.css'
import NavbarButtonLogout from './Navbar-button-logout/Navbar-button-logout';
import NavbarButtonLogin from './Navbar-button-login/Navbar-button-login';
import NavbarButtonRegister from './Navbar-button-Register/Navbar-button-register';


const Navbar: React.FC = () => {
  if (localStorage.getItem('accessToken')){
    return (
      <nav className={styles.nav}>
  
        <div className={styles.logo}>
          <div className={styles.topic}>
            To Do AI
          </div>
        </div>
  
        <div className={styles.content}>
          <NavbarButtonLogout/>
        </div>

      </nav>
    );
  } else {
    return (
      <nav className={styles.nav}>
  
        <div className={styles.logo}>
          <div className={styles.topic}>
            To Do AI
          </div>
        </div>
  
        <div className={styles.content}>
        <NavbarButtonLogin/>
  
        <NavbarButtonRegister/>
  
        </div>
      </nav>
    );
  }
};

export default Navbar;