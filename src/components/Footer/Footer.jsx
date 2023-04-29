import React from 'react';
import './footer.scss';
import Navigation from './Navigation/Navigation';
import Description from './Description/Deascription';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <Navigation />
        <div className="footer__line"></div>
        <Description />
      </div>
    </footer>
  );
};

export default Footer;
