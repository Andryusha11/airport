import React from 'react';
import './header.scss';
import HeaderLogo from './HeaderLogo/HeaderLogo';
import HeaderList from './HeaderList/HeaderList';

const Header = () => {
  return (
    <header className="header">
      <HeaderLogo />
      <HeaderList />
      <button className="header__button">EN</button>
    </header>
  );
};

export default Header;
