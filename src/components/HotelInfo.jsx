import React from 'react';

const HotelInfo = ({imgUrl}) => {
  return (
    <div className='hotel-info'>
      <div className='hotel-info-description'>
        <span className='hotel-info-description-text'>
          Our Hotel is a modern, elegant 4-star hotel overlooking the sea, perfect for a romantic, charming vacation.
          The rooms at the Hotel are new, well-lit and inviting. Our reception staff will be happy to help you during your stay here, suggesting itineraries, guided visits and some good restaurants in the historic centre.
          We are located in the heart of the historic center of the city in an extremely characteristic, quite and lively area within short walk distance to all sites and it surrounded by the extraordinary beauty of churches, buildings, shops and monuments.
        </span>
      </div>
      <div className='hotel-info-img-container'>
        <div className='hotel-info-img-wrapper'>
          <img className='hotel-info-img' src={imgUrl} alt='hh'/>
        </div>
      </div>
      <div className='hotel-info-extended'>
        <div className='hotel-info-extended-item'>
            <div className='hotel-info-rate'>8.7</div>
        </div>
        <div className='hotel-info-extended-item'>
          <span className='hotel-info-reviews'>1984<br/> reviews</span>
        </div>
        <div className='hotel-info-extended-item'>
          <span className='hotel-info-reviews'>From <br/> 180$</span>
        </div>
      </div>
    </div>
  );
};
export default HotelInfo;