import React from 'react';
import logoSrc from '../assets/Logo.png';
import Logo from './Logo';
import Cart from './Cart';

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <Logo
          src={logoSrc}
          alt="Bonfire"
          title="Bonfire"
        />
        <Cart />
      </div>
    </div>
  );
}

export default Header;
