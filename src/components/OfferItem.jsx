import React from 'react';

const OfferItem = (props) => {
  return (
    <div className='offer__item'>
      <div className='offer__img-wrapper'>
        {props.svg}
      </div>
      <span className='offer__item-text'>{props.text}</span>
    </div>
  );
};

export default OfferItem;