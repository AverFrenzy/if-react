import React from 'react';

import BookOnlineSVG from './svg/WhatDoWeOffer/BookOnlineSVG';
import CommunicateSVG from './svg/WhatDoWeOffer/CommunicateSVG';
import SupportSVG from './svg/WhatDoWeOffer/SupportSVG';
import GuestReviewsSVG from './svg/WhatDoWeOffer/GuestReviewsSVG';
import OfferItem from './OfferItem';

const OfferItems = () => {
  const data = [
    {
      id: 1,
      svg: <SupportSVG/>,
      text: 'Support 24/7',
    },
    {
      id: 2,
      svg: <CommunicateSVG/>,
      text: 'Communicate directly'
    },
    {
      id: 3,
      svg: <BookOnlineSVG/>,
      text: 'Book online',
    },
    {
      id: 4,
      svg: <GuestReviewsSVG/>,
      text: 'Real guest reviews',
    }
  ];
  const OfferData = data.map(({id, text, svg}) => (
    <OfferItem
      key={id}
      text={text}
      svg={svg}
    />
  ));

  return (
    <div className='offer__img-container'>
      {OfferData}
    </div>
  );
};

export default OfferItems;