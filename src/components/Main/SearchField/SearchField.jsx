import React from 'react';
import './search-field.scss';

const SearchField = () => {
  return (
    <>
      <h2 className="main__header">FLIGHT SEARCH</h2>
      <div className="main__search">
        <input className="main__search-input" type="text" placeholder="Flight number or city" />
        <button className="main__search-button">SEARCH</button>
      </div>
    </>
  );
};

export default SearchField;
