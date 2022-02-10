import React from 'react';

import Header from '../components/Header';
import MainPageForm from '../components/MainPageForm';
import MainPageApps from '../components/MainPageApps';

const MainPage = ({
                    setIsHotelsVisible,
                    searchInput,
                    setSearchInput,
                    setFoundHotels,
                    setIsCalendarVisible,
                    setIsOptionsVisible,
                    isCalendarVisible,
                    isOptionsVisible,
                    isLogoutVisible,
                    setIsLogoutVisible,
                  }) => {

  return (
    <div className='main-page-container'>
      <div className='container'>
        <Header isLogoutVisible={isLogoutVisible}
                setIsLogoutVisible={setIsLogoutVisible}/>
        <h1 className='main-page__heading'>Discover stays <br/>to live, work or
          just relax</h1>
        <MainPageForm setIsHotelsVisible={setIsHotelsVisible}
                      setSearchInput={setSearchInput}
                      searchInput={searchInput}
                      setFoundHotels={setFoundHotels}
                      setIsOptionsVisible={setIsOptionsVisible}
                      setIsCalendarVisible={setIsCalendarVisible}
                      isOptionsVisible={isOptionsVisible}
                      isCalendarVisible={isCalendarVisible}
        />
        <MainPageApps/>
      </div>
    </div>
  );
};

export default MainPage;

