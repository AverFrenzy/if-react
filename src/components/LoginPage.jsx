import React, {useState} from 'react';
import {useLocation, useNavigate} from 'react-router-dom';


import Header from './Header';
import useAuth from '../hooks/useAuth';

function LoginPage({setIsLogoutVisible, isLogoutVisible}) {
  const [userNameInput, setUserNameInput] = useState(null);
  const [userPasswordInput, setUserPasswordInput] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const {handleLogInInfo} = useAuth();

  const fromPage = location.state?.from?.pathname || '/';

  const changeInputText = (event) => {
    event.preventDefault();
    if (event.target.name === 'user-name') {
      setUserNameInput(event.target.value);
      console.log(userNameInput)
    } else {
      setUserPasswordInput(event.target.value);
      console.log(userPasswordInput)
    }
  };
  const logIn = (event) => {
    event.preventDefault();
    handleLogInInfo(userNameInput,userPasswordInput, () => navigate(fromPage,{replace:true}));
  };

  return (
    <div className='App'>
      <div className='main-page-container'>
        <div className='container'>
          <Header setIsLogoutVisible={setIsLogoutVisible}
                  isLogoutVisible={isLogoutVisible}/>
          <div className='login-container'>
            <span className='login-heading'>Sign in</span>
            <div className='login-input-wrapper'>
              <input onChange={changeInputText} className='login-input'
                     type='text' name='user-name'
                     id='user-name' autoComplete='off'/>
              <label className='login-label-name' htmlFor='user-name'>
                Email address
              </label>
              <input onChange={changeInputText} className='login-input'
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
    </div>
  );
}

export default LoginPage;