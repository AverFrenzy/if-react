import React from 'react';
import {connect} from 'react-redux';
import {useLocation, useNavigate} from 'react-router-dom';

import Header from './Header';
import {
  setUserNameInputActionCreator, setUserPasswordInputActionCreator,
  setUserNameActionCreator, setUserPasswordActionCreator
} from '../actionCreators';


const LoginPage = ({
                     userNameInput, userPasswordInput, setUserNameInput,
                     setUserPasswordInput, setUserName, setUserPassword
                   }) => {

  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state?.from?.pathname || '/';

  const logIn = (event) => {
    event.preventDefault();
    if (userNameInput && userPasswordInput) {
      setUserName(userNameInput);
      setUserPassword(userPasswordInput);
      navigate(fromPage, {replace: true});
    } else {
      alert('enter ur login name and password pls');
    }
  };

  return (<div className='App'>
    <div className='main-page-container'>
      <div className='container'>
        <Header/>
        <div className='login-container'>
          <span className='login-heading'>Sign in</span>
          <div className='login-input-wrapper'>
            <input onChange={setUserNameInput} className='login-input'
                   type='text' name='user-name'
                   id='user-name' autoComplete='off'/>
            <label className='login-label-name' htmlFor='user-name'>
              Email address
            </label>
            <input onChange={setUserPasswordInput} className='login-input'
                   type='password'
                   name='user-password'
                   id='user-password' autoComplete='off'/>
            <label className='login-label-password' htmlFor='user-password'>
              Password
            </label>
            <button onClick={logIn} className='login-button'>Sign in</button>
          </div>
        </div>
      </div>
    </div>
  </div>);
};

const mapStateToProps = (state) => ({
  userNameInput: state.userNameInput,
  userPasswordInput: state.userPasswordInput,
});

const mapDispatchToProps = (dispatch) => ({
    setUserNameInput: (inputValue) => dispatch(setUserNameInputActionCreator(inputValue)),
    setUserPasswordInput: (inputValue) => dispatch(setUserPasswordInputActionCreator(inputValue)),
    setUserName: (inputValue) => dispatch(setUserNameActionCreator(inputValue)),
    setUserPassword: (inputValue) => dispatch(setUserPasswordActionCreator(inputValue)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);


