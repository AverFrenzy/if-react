import React from 'react';
import {connect} from 'react-redux';

import HomesGuestsLoves from '../containers/HomesGuestsLoves';
import MainPage from '../containers/MainPage';
import WhatDoWeOffer from '../containers/WhatDoWeOffer';
import Footer from '../containers/Footer';
import AvailableHotels from '../components/AvailableHotels';


const HomePage = ({isHotelsVisible}) => {
  return (
    <div  className='App'>
      <MainPage />
      {isHotelsVisible && <AvailableHotels/>}
      <WhatDoWeOffer/>
      <HomesGuestsLoves/>
      <Footer/>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isHotelsVisible: state.isHotelsVisible,
});

export default connect(mapStateToProps)(HomePage);
