import React from 'react';
import MainPageGoogleAppSVG from './svg/AppIcons/MainPageGoogleAppSVG';
import MainPageAppleAppSVG from './svg/AppIcons/MainPageAppleAppSVG';

const MainPageApps = () => {
  return (
    <div className='main-page__apps'>
      <a href='https://play.google.com/store' target='_blank'>
        <MainPageGoogleAppSVG/>
      </a>
      <a href='https://www.apple.com/app-store/' target='_blank' className='main-page__apps__item'>
        <MainPageAppleAppSVG/>
      </a>
    </div>
  );
};

export default MainPageApps;
