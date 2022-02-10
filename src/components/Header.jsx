import React from 'react';

import HeaderLogoSVG from './svg/Header/HeaderLogoSVG';
import HeaderAccountSVG from './svg/Header/HeaderAccountSVG';
import HeaderThemeSVG from './svg/Header/HeaderThemeSVG';
import HeaderMenuSVG from './svg/Header/HeaderMenuSVG';
import Logout from './Logout';

import useAuth from '../hooks/useAuth';

const Header = ({isLogoutVisible, setIsLogoutVisible}) => {

  const {userName,userPassword} = useAuth();

  const showLogout = (event) => {
    event.stopPropagation();
    if (event.target.tagName === 'svg' || event.target.tagName === 'path') {
      if(isLogoutVisible) {
        setIsLogoutVisible(false);
      } else {
        setIsLogoutVisible(true);
      }
    }
  };

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
          <div onClick={showLogout}
               className='header-links__img-links__account'>
            <a href='#'>
              <HeaderAccountSVG  isLogoutVisible={isLogoutVisible}/>
            </a>
            {(userName && userPassword && isLogoutVisible) &&
              <Logout setIsLogoutVisible={setIsLogoutVisible}
                      isLogoutVisible={isLogoutVisible}/>
            }
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