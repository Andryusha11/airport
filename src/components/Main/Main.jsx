import React from 'react';
import './main.scss';
import SearchField from './SearchField/SearchField';
import ContentButtons from './ContentButtons/ContentButtons';
import ContentCalendar from './ContentCalendar/ContentCalendar';
import ContentNavigation from './ContentNavigation/ContentNavigation';
import FlightsList from './FlightsList/FlightsList';
import Advertisement from './Advertisement/Advertisement';

const Main = () => {
  return (
    <main className="main">
      <SearchField />
      <div className="main__content">
        <ContentButtons />
        <ContentCalendar />
        <ContentNavigation />
        <FlightsList />
      </div>
      <Advertisement />
    </main>
  );
};

export default Main;
