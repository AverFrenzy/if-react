import React, {useRef} from 'react';
import {connect} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import HeaderLogoutSVG from './svg/Header/HeaderLogoutSVG';
import {
  setIsLogoutVisibleActionCreator, setUserNameActionCreator,
  setUserPasswordActionCreator,
} from '../actionCreators';


function Logout({setIsLogoutVisible, setUserName, setUserPassword}) {
  const logOutRef = useRef(null);
  const navigate = useNavigate();

  const logoutFromAcc = (event) => {
    if (event.currentTarget === logOutRef.current) {
      event.stopPropagation();
      setUserName(null);
      setUserPassword(null);
      navigate('/login', {replace: true});
      setIsLogoutVisible();
    }
  };

  return (
    <div onClick={logoutFromAcc} ref={logOutRef} className='logout-container'>
      <HeaderLogoutSVG/>
      <span className='logout-text'>Sign out</span>
    </div>);
};

const mapDispatchToProps = (dispatch) => ({
  setUserName: (inputValue) => dispatch(setUserNameActionCreator(inputValue)),
  setUserPassword: (inputValue) => dispatch(setUserPasswordActionCreator(inputValue)),
  setIsLogoutVisible: () => dispatch(setIsLogoutVisibleActionCreator(false)),
});

export default connect(null, mapDispatchToProps)(Logout);
