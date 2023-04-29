import React from 'react';
import NavigationLists from './NavigationLists/NavigationLists';
import Contacts from './Contacts/Contacts';
import './navigation.scss';

const Navigation = () => {
  return (
    <div className="footer__navigation">
      <NavigationLists />
      <Contacts />
    </div>
  );
};

export default Navigation;
