import React, {useState} from 'react';
import {Routes, Route} from 'react-router-dom';


import HomePage from './components/HomePage';

import ChosenHotelInfo from './components/ChosenHotelInfo';
import LoginPage from './components/LoginPage';
import RequireAuth from './hoc/RequireAuth';
import {AuthProvider} from './hoc/AuthProvider';

const App = () => {
  const [isLogoutVisible, setIsLogoutVisible] = useState(false);

  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={
          <RequireAuth>
            <HomePage isLogoutVisible={isLogoutVisible}
                      setIsLogoutVisible={setIsLogoutVisible}/>
          </RequireAuth>
        }/>
        <Route path='/login'
               element={<LoginPage isLogoutVisible={isLogoutVisible}
                                   setIsLogoutVisible={setIsLogoutVisible}/>}/>
        <Route path='/hotel/:hotelId' element={<ChosenHotelInfo/>}/>
      </Routes>
    </AuthProvider>
  );
};

export default App;
