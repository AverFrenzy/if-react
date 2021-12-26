import React, {useState} from 'react';

import HomesGuestsLoves from './containers/HomesGuestsLoves';
import MainPage from './containers/MainPage';
import WhatDoWeOffer from './containers/WhatDoWeOffer';
import Footer from './containers/Footer';
import AvailableHotels from './components/AvailableHotels';

const App = () => {
  const [isHotelsVisible, setIsHotelsVisible] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const [foundHotels, setFoundHotels] = useState([]);

  return (
    <div className='App'>
      <MainPage setIsHotelsVisible={setIsHotelsVisible}
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                setFoundHotels={setFoundHotels}
      />
      {isHotelsVisible ?
        <AvailableHotels searchInput={searchInput}
                         foundHotels={foundHotels}
        /> : null}
      <WhatDoWeOffer/>
      <HomesGuestsLoves/>
      <Footer/>
    </div>
  );
};

export default App;
