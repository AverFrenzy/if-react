import React, {useState} from 'react';

import HomesGuestsLoves from '../containers/HomesGuestsLoves';
import MainPage from '../containers/MainPage';
import WhatDoWeOffer from '../containers/WhatDoWeOffer';
import Footer from '../containers/Footer';
import AvailableHotels from '../components/AvailableHotels';

const HomePage = ({isLogoutVisible, setIsLogoutVisible}) => {
  const [isHotelsVisible, setIsHotelsVisible] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [foundHotels, setFoundHotels] = useState([]);


  const closeSearchOptions = (event) => {
    event.stopPropagation();
    setIsOptionsVisible(false);
  };

  const closeCalendar = (event) => {
    event.stopPropagation();
    setIsCalendarVisible(false);
  };

  const closeParams = (event) => {
    const conditionToCloseCalendar =
      event.target.tagName !== 'INPUT'
      && event.target.tagName !== 'path'
      && event.target.tagName !== 'LABEL'
      && event.target.tagName !== 'SPAN'
      && event.target.tagName !== 'BUTTON'
      && event.target.tagName !== 'svg'
      && !event.target.className.includes('calendar')
      && !event.target.className.includes('options');

    if (conditionToCloseCalendar) {
      closeSearchOptions(event);
      closeCalendar(event);
    }
  };

  return (
    <div onClick={closeParams} className='App'>
      <MainPage setIsHotelsVisible={setIsHotelsVisible}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setFoundHotels={setFoundHotels}
                setIsOptionsVisible={setIsOptionsVisible}
                setIsCalendarVisible={setIsCalendarVisible}
                isCalendarVisible={isCalendarVisible}
                isOptionsVisible={isOptionsVisible}
                isLogoutVisible={isLogoutVisible}
                setIsLogoutVisible={setIsLogoutVisible}
      />
      {isHotelsVisible &&
        <AvailableHotels searchInput={searchInput}
                         foundHotels={foundHotels}
        />}
      <WhatDoWeOffer/>
      <HomesGuestsLoves/>
      <Footer/>
    </div>
  );
};

export default HomePage;