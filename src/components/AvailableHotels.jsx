import React from 'react';
import Hotels from './Hotels';

const AvailableHotels = ({foundHotels}) => {

  return (
    <div className='container'>
      <div className='homes'>
        <h2 className='homes__heading'
            id='available-hotels__heading'>Available Hotels</h2>
        <Hotels hotelsData={foundHotels}/>
      </div>
    </div>
  );
};

export default AvailableHotels;