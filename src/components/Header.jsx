import React from 'react';
import HeaderLogoSVG from './svg/Header/HeaderLogoSVG';
import HeaderAccountSVG from './svg/Header/HeaderAccountSVG';
import HeaderThemeSVG from './svg/Header/HeaderThemeSVG';
import HeaderMenuSVG from './svg/Header/HeaderMenuSVG';

const Header = () => {
  return (
    <header className='header'>
      <div className='header__logo-container'>
        <HeaderLogoSVG/>
      </div>
      <div className='header-links'>
        <div className='header-links__text-links'>
          <span className='header_hover'><a href='#'>Stays</a></span>
          <span className='header_hover'><a href='#'>Attractions</a></span>
        </div>
        <div className='header-links__img-links'>
          <div className='header-links__img-links__theme'>
            <a href='#'>
              <HeaderThemeSVG/>
            </a>
          </div>
          <div className='header-links__img-links__account'>
            <a href='#'>
              <HeaderAccountSVG/>
            </a>
          </div>
          <div className='header-links__img-links__menu'>
            <a href='#'>
              <HeaderMenuSVG/>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;