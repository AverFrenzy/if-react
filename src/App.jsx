import React from 'react';
import {Routes, Route} from 'react-router-dom';

import HomePage from './components/HomePage';

import ChosenHotelInfo from './components/ChosenHotelInfo';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<HomePage />}/>
      {/*<Route path='/hotel/'element={<ChosenHotelInfo />}/>*/}
      <Route path='/hotel/:hotelId' element={<ChosenHotelInfo />}/>
    </Routes>
  );
};

export default App;
