import React from 'react';
import FlightsListItem from './FlightsListItem/FlightsListItem';
import './flights-list.scss';

const FlightsList = () => {
  return (
    <ul className="main__content-list">
      <FlightsListItem />
      <FlightsListItem />
    </ul>
  );
};

export default FlightsList;
