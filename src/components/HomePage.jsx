import React, {useState} from 'react';

import HomesGuestsLoves from '../containers/HomesGuestsLoves';
import MainPage from '../containers/MainPage';
import WhatDoWeOffer from '../containers/WhatDoWeOffer';
import Footer from '../containers/Footer';
import AvailableHotels from '../components/AvailableHotels';

const HomePage = () => {
  const [isHotelsVisible, setIsHotelsVisible] = useState(false);
  const [isOptionsVisible, setIsOptionsVisible] = useState(false);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [foundHotels, setFoundHotels] = useState([]);

  const closeSearchOptions = (event) => {
    event.stopPropagation();
    const conditionToCloseSearchOptions = event.target.tagName !== 'INPUT'
      && event.target.tagName !== 'LABEL'
      && event.target.tagName !== 'SPAN' && event.target.tagName !== 'BUTTON'
      && !event.target.className.includes('options');
    if (conditionToCloseSearchOptions) {
      setIsOptionsVisible(false);
    }
  };

  const closeCalendar = (event) => {
    event.stopPropagation();
    const conditionToCloseCalendar = event.target.tagName !== 'INPUT'
      && event.target.tagName !== 'LABEL' && event.target.tagName !== 'SPAN'
      && event.target.tagName !== 'BUTTON'
      && !event.target.className.includes('calendar-container');
    if (conditionToCloseCalendar) {
      setIsCalendarVisible(false);
    }
  };

  const closeParams = (event) => {
    closeSearchOptions(event);
    closeCalendar(event);
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