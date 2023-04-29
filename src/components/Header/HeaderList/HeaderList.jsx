import React from 'react';
import './header-list.scss';

const HeaderList = () => {
  return (
    <ul className="header__list">
      <li className="header__list-item">Passengers</li>
      <li className="header__list-item">Services</li>
      <li className="header__list-item">VIP</li>
      <li className="header__list-item">Partners</li>
      <li className="header__list-item">Press center</li>
    </ul>
  );
};

export default HeaderList;
