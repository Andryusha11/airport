import React from 'react';
import './advertisement.scss';

const Advertisement = () => {
  return (
    <div className="main__advertisement">
      <div className="main__advertisement-body">
        <span className="main__advertisement-body-text">Testing for covid-19 at Kyiv airport.</span>
        <span className="main__advertisement-body-text">For everybody 24/7</span>
      </div>
      <a href="#" className="main__advertisement-icon">
        <i className="fa-solid fa-vial-virus fa-2xl "></i>
      </a>
    </div>
  );
};

export default Advertisement;
