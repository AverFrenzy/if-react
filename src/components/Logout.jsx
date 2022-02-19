import React from 'react';
import {useNavigate} from 'react-router-dom';

import HeaderLogoutSVG from './svg/Header/HeaderLogoutSVG';

import useAuth from '../hooks/useAuth';

function Logout({setIsLogoutVisible}) {
  const navigate = useNavigate();
  const {handleLogOutInfo} = useAuth();

  const logoutFromAcc = (event) => {
    const conditionToClose =
      event.target.className === 'logout-container'
      || event.target.className === 'logout-text'
      || event.target.tagName === 'svg'
      || event.target.tagName === 'path';

    if (conditionToClose) {
      event.stopPropagation();
      handleLogOutInfo(() => navigate('/login', {replace: true}));
      setIsLogoutVisible(false)
    }
  };

  return (
    <div onClick={logoutFromAcc} className='logout-container'>
      <HeaderLogoutSVG/>
      <span className='logout-text'>Sign out</span>
    </div>
  );
}

export default Logout;