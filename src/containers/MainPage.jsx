import React from 'react';
import Header from '../components/Header';
import MainPageForm from '../components/MainPageForm';
import MainPageApps from '../components/MainPageApps';

const MainPage = ({setIsHotelsVisible, searchInput, setSearchInput,setFoundHotels}) => {
  return (
    <div className='main-page-container'>
      <div className='container'>
        <Header/>
        <h1 className='main-page__heading'>Discover stays <br/>to live, work or
          just relax</h1>
        <MainPageForm setIsHotelsVisible={setIsHotelsVisible}
                      setSearchInput={setSearchInput}
                      searchInput={searchInput}
                      setFoundHotels={setFoundHotels}
        />
        <MainPageApps/>
      </div>
    </div>
  );
};

export default MainPage;

