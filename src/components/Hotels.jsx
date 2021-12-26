import React from 'react';

import Hotel from './Hotel';

const Hotels = (props) => {
  const hotelsData = props.hotelsData.map((hotel) => (
    <Hotel
      key={hotel.id}
      name={hotel.name}
      city={hotel.city}
      country={hotel.country}
      imageUrl={hotel.imageUrl}
    />
  ));
  return (
    <div className='homes__img-container'>
      {hotelsData}
    </div>
  );
};

export default Hotels;
