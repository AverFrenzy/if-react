import React from 'react';
import {Routes, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';

import HomePage from './components/HomePage';
import ChosenHotelInfo from './components/ChosenHotelInfo';
import LoginPage from './components/LoginPage';
import RequireAuth from './hoc/RequireAuth';


const App = () => {
  return (
      <Provider store={store}>
        <Routes>
          <Route path='/' element={
            <RequireAuth>
              <HomePage/>
            </RequireAuth>
          }/>
          <Route path='/login'
                 element={<LoginPage/>}/>
          <Route path='/hotel/:hotelId' element={<ChosenHotelInfo/>}/>
        </Routes>
      </Provider>
  );
};

export default App;
