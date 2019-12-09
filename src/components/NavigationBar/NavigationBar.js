import React from 'react';
import LogoIcon from '../../images/LogoIcon.svg';
import LogoText from '../../images/LogoText.png';
import './NavigationBar.css';
// import { Link } from 'react-router-dom';

const NavigationBar = () => {
  const handleLogout = () => {
    window.localStorage.clear();
  };
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <span className="icon-logo">
          <img src={LogoIcon} className="icon-img" alt="logo-icon" />
          <img src={LogoText} className="icon-txt" alt="logo-txt" />
        </span>
      </a>
      <nav className="header__nav">
        <ul>
          <li>
            <a className="header__a gradientBorder" href="/posts">
              포스트
            </a>
            <a className="header__a gradientBorder" href="/map">
              지도
            </a>
            <a className="header__a gradientBorder" href="/travel">
              여행지
            </a>
            <a className="header__a gradientBorder" href="/news">
              뉴스룸
            </a>
            <a
              className="header__a gradientBorder"
              href="/auth"
              onClick={handleLogout}
            >
              로그아웃
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavigationBar;
