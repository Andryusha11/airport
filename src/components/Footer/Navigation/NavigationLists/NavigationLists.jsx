import React from 'react';
import './navigation-lists.scss';

const NavigationLists = () => {
  return (
    <>
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
    </>
  );
};

export default NavigationLists;
