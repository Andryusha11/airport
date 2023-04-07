import React from 'react';
import './header.scss';

const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <span className="header__logo-city">KYIV</span>
        <span className="header__logo-name">Sikorsky Airport</span>
      </div>
      <ul className="header__list">
        <li className="header__list-item">Passengers</li>
        <li className="header__list-item">Services</li>
        <li className="header__list-item">VIP</li>
        <li className="header__list-item">Partners</li>
        <li className="header__list-item">Press center</li>
      </ul>
      <button className="header__button">EN</button>
    </header>
  );
};

export default Header;
