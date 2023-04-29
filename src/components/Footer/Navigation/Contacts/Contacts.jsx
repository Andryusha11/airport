import React from 'react';
import './contacts.scss';

const Contacts = () => {
  return (
    <div className="footer__contacts">
      <div className="footer__contacts-info">
        <h4 className="footer__contacts-info__title">Aviation reference</h4>
        <span className="footer__contacts-info__number">
          <b>+38 (044) 500 49 73</b>
        </span>
      </div>
      <div className="footer__contacts-info">
        <h4 className="footer__contacts-info__title">Join us</h4>
        <ul className="footer__contacts-info__list">
          <li className="footer__contacts-info__list-item">
            <i className="fa-brands fa-facebook-f"></i>
          </li>
          <li className="footer__contacts-info__list-item">
            <i className="fa-brands fa-twitter"></i>
          </li>
          <li className="footer__contacts-info__list-item">
            <i className="fa-brands fa-instagram"></i>
          </li>
          <li className="footer__contacts-info__list-item">
            <i className="fa-brands fa-youtube"></i>
          </li>
          <li className="footer__contacts-info__list-item">
            <i className="fa-brands fa-linkedin-in"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Contacts;
