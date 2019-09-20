import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAddressBook} from "@fortawesome/free-solid-svg-icons";

const AppHeader = () => {
  return (
    <header className="App-header bg-dark text-light">
      <h1><FontAwesomeIcon icon={faAddressBook} />&nbsp;Contact Me</h1>
    </header>
  );
};

export default AppHeader;

