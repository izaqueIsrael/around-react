import React from 'react';
import logo from '../images/logo.svg';

function Header() {
  return (
    <>
      <header className='header' >
        <img className='logo' alt='Logo Around The U.S.' src={logo} />
        <div className='line ' />
      </header>
    </>
  );
}

export default Header;