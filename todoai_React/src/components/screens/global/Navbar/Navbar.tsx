import styles from './Navbar.module.css'
import NavbarButtonLogout from './Navbar-button-logout/Navbar-button-logout';
import NavbarButtonLogin from './Navbar-button-login/Navbar-button-login';
import { useEffect, useState } from 'react';

function Navbar() {
  const [token, setToken] = useState(localStorage.getItem('accessToken'));

  useEffect(() => {
    const handleChangeStorage = () => {
      setToken(localStorage.getItem('accessToken'));
    };
  
    window.addEventListener('storage', handleChangeStorage);
    return () => window.removeEventListener('storage', handleChangeStorage);
  }, []);


  return (
    <nav className={styles.nav}>

      <div className={styles.logo}>
        <div className={styles.topic}>
          To Do AI
        </div>
      </div>

      <div className={styles.content}>
        {token ? <NavbarButtonLogout/> : <NavbarButtonLogin/>}
      </div>

    </nav>
  );
};

export default Navbar;
