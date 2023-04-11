import React from 'react';
import './main.scss';
import { DateCalendar, LocalizationProvider } from '@mui/x-date-pickers';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

const Main = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <main className="main">
        <h2 className="main__header">FLIGHT SEARCH</h2>
        <div className="main__search">
          <input className="main__search-input" type="text" placeholder="Flight number or city" />
          <button className="main__search-button">SEARCH</button>
        </div>
        <div className="main__content">
          <div className="main__content-buttons">
            <button className="main__content-button departures">DEPARTURES</button>
            <button className="main__content-button">ARRIVALS</button>
          </div>
          <div className="main__content-calendar">
            <button className="main__content-calendar-icon">
              <p className="main__content-calendar-icon-date">Date</p>
              <i className="fa-solid fa-calendar fa-2xl"></i>
            </button>
            {/* <DemoContainer components={['Main']}>
              <DemoItem label="Date">
                <DateCalendar disabled />
              </DemoItem>
            </DemoContainer> */}

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
          <ul className="main__content-list">List</ul>
        </div>
        <div className="main__advertisement">
          <div className="main__advertisement-body">
            <span className="main__advertisement-body-text">
              Testing for covid-19 at Kyiv airport.
            </span>
            <span className="main__advertisement-body-text">For everybody 24/7</span>
          </div>
          <a href="#" className="main__advertisement-icon">
            <i className="fa-solid fa-vial-virus fa-2xl "></i>
          </a>
        </div>
      </main>
    </LocalizationProvider>
  );
};

export default Main;
