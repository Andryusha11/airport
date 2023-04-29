import React from 'react';
import './content-calendar.scss';

const ContentCalendar = () => {
  return (
    <div className="main__content-calendar">
      <button className="main__content-calendar-icon">
        <p className="main__content-calendar-icon-date">Date</p>
        <i className="fa-solid fa-calendar fa-2xl"></i>
      </button>
      <button className="main__content-calendar-yesterday">
        <span className="main__content-calendar-yesterday-date">date</span>
        YESTERDAY
      </button>
      <button className="main__content-calendar-today">
        <span className="main__content-calendar-today-date">date</span>
        TODAY
      </button>
      <button className="main__content-calendar-tomorrow">
        <span className="main__content-calendar-tomorrow-date">date</span>
        TOMORROW
      </button>
    </div>
  );
};

export default ContentCalendar;
