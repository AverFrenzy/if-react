import React from 'react';
import {Link} from 'react-router-dom';

import Hotel from './Hotel';

const Hotels = (props) => {
  const hotelsData = props.hotelsData.map((hotel) => (
    <Link key={hotel.id} className='homes__item' to={`/hotel/${hotel.id}`}>
      <Hotel
        name={hotel.name}
        city={hotel.city}
        country={hotel.country}
        imageUrl={hotel.imageUrl}
      />
    </Link>
  ));
  return (
    <div className='homes__img-container'>
      {hotelsData}
    </div>
  );
};

export default Hotels;
