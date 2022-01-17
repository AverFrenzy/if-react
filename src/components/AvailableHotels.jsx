import React, {useState} from 'react';
import Hotels from './Hotels';

function AvailableHotels({searchInput, hotelsData}) {
  const availableHotelsData = [];

  const findedHotels = hotelsData.filter((item) => {
        if (item.city.toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
        if (item.country.toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
        if (item.name.toLowerCase().includes(searchInput.toLowerCase())) {
          return item;
        }
    });
  return (
    <div className='container'>
      <div className='homes'>
        <h2 className='homes__heading'>Available Hotels</h2>
        <Hotels hotelsData={findedHotels}/>
      </div>
    </div>
  );
}

export default AvailableHotels;