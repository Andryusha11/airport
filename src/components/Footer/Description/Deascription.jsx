import React from 'react';
import './description.scss';

const Description = () => {
  return (
    <div className="footer__description">
      <div className="footer__description-company">
        <div className="footer__description-company__info">
          <span className="footer__description-company__info-year">© 2011-2021</span>
          <br />
          <span className="footer__description-company__info-city">Kyiv International Airport</span>
        </div>
        <div className="footer__description-company__name">
          <span className="footer__description-company__name-brand">
            Part of <b>Ufuture Investment Group</b>
          </span>

          <span className="footer__description-company__name-logo">U</span>
        </div>
      </div>
      <div className="footer__description-developers">
        <span>Site development</span>
        <span className="footer__description-developers-name">
          <b>smp/</b>solutions
        </span>
      </div>
    </div>
  );
};

export default Description;
