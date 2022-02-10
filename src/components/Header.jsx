import React, {useRef} from 'react';
import {connect} from 'react-redux';

import HeaderLogoSVG from './svg/Header/HeaderLogoSVG';
import HeaderAccountSVG from './svg/Header/HeaderAccountSVG';
import HeaderThemeSVG from './svg/Header/HeaderThemeSVG';
import HeaderMenuSVG from './svg/Header/HeaderMenuSVG';
import Logout from './Logout';
import {
  setIsLogoutVisibleActionCreator
} from '../actionCreators';


const Header = ({
                  isLogoutVisible, setIsLogoutVisible, userName
                }) => {
  const ref = useRef(null);

  const showLogout = (event) => {
    event.stopPropagation();
    if (event.currentTarget === ref.current && userName) {
      isLogoutVisible ? setIsLogoutVisible(false) : setIsLogoutVisible(true);
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
               ref={ref}
               className='header-links__img-links__account'>
            <a href='#'>
              <HeaderAccountSVG isLogoutVisible={isLogoutVisible}/>
            </a>
            {(userName && isLogoutVisible) && <Logout/>}
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

const mapStateToProps = (state) => ({
  isLogoutVisible: state.isLogoutVisible,
  userName: state.userName,
  userPassword: state.userPassword
});

const mapDispatchToProps = (dispatch) => ({
    setIsLogoutVisible: (value) => dispatch(setIsLogoutVisibleActionCreator(value)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(Header);
