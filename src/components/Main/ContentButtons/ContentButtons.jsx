import React from 'react';
import './content-buttons.scss';

const ContentButtons = () => {
  return (
    <div className="main__content-buttons">
      <button className="main__content-button departures">DEPARTURES</button>
      <button className="main__content-button">ARRIVALS</button>
    </div>
  );
};

export default ContentButtons;
