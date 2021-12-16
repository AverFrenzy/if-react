import React from 'react';
import Hotels from '../components/Hotels';

const HomesGuestsLoves = (props) => {
  return (
    <div className='container'>
      <div className='homes'>
        <h2 className='homes__heading'>Homes guests loves</h2>
        <Hotels hotelsData={props.hotelsData}/>
      </div>
    </div>
  );
};

export default HomesGuestsLoves;
