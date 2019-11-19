import React from 'react';
import LogoIcon from '../../images/LogoIcon.svg';

const NavigationBar = () => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <span className="icon-logo">
          <LogoIcon />
        </span>
      </a>
    </header>
  );
};

export default NavigationBar