import React from 'react';
import './Navbar.css'

interface NavbarProps {
  children?: React.ReactNode
}

const Navbar: React.FC<NavbarProps> = ({ children }) => {
  return (
    <nav>
      <a href="/">title</a>
      { children }
    </nav>
  );
};

export default Navbar;