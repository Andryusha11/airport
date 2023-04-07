import React from 'react';
import './footer.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__navigation">
          <ul className="footer__navigation-list">
            <h4 className="footer__navigation-list-title">Passangers</h4>
            <li className="footer__navigation-list-item">Schedule</li>
            <li className="footer__navigation-list-item">Ordering services</li>
            <li className="footer__navigation-list-item">Contacts information</li>
            <li className="footer__navigation-list-item">Privacy policy</li>
            <li className="footer__navigation-list-item">Feedback and suggestions form</li>
          </ul>
          <ul className="footer__navigation-list">
            <h4 className="footer__navigation-list-title">Partners</h4>
            <li className="footer__navigation-list-item">Main</li>
            <li className="footer__navigation-list-item">Ground handling</li>
            <li className="footer__navigation-list-item">Characteristics of the airfield</li>
            <li className="footer__navigation-list-item">Training center</li>
            <li className="footer__navigation-list-item">Vacancies</li>
          </ul>
          <ul className="footer__navigation-list">
            <h4 className="footer__navigation-list-title">Press Centre</h4>
            <li className="footer__navigation-list-item">The main of press center</li>
            <li className="footer__navigation-list-item">Latest news</li>
            <li className="footer__navigation-list-item">Social and art projects</li>
            <li className="footer__navigation-list-item">Financial Statements</li>
            <li className="footer__navigation-list-item">Passenger traffic statistics</li>
          </ul>
          <div className="footer__contacts">
            <div className="footer__contacts-info">
              <h4 className="contacts-info__title">Aviation reference</h4>
              <span className="contacts-info__number">+380445004973</span>
            </div>
            <div className="footer__contacts-info">
              <h4 className="contacts-info__title">Join us</h4>
              <ul className="contacts-info__list">
                <li className="contacts-info__list-item">F</li>
                <li className="contacts-info__list-item">T</li>
                <li className="contacts-info__list-item">I</li>
                <li className="contacts-info__list-item">Y</li>
                <li className="contacts-info__list-item">L</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__line"></div>
        <div className="footer__description">
          <div className="footer__description-company">
            <div className="description-company__info">
              <span className="description-company__info-year">C 2011-2021</span>
              <span className="description-company__info-city">Kyiv International Airport</span>
            </div>
            <div className="description-company__name">
              <span className="description-company__name-brand">
                Part of Ufuture Investment Group
              </span>
              <i className="description-company__name-logo">0</i>
            </div>
          </div>
          <div className="footer__description-developers">
            <span>Site development</span>
            <span>smp/solutions</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
