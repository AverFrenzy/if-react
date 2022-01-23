import React, {useEffect, useState} from 'react';
import Hotels from '../components/Hotels';
import axios from 'axios';

const HomesGuestsLoves = () => {
  const [homesHotels, setHomesHotels] = useState([]);

  const getHomesHotels = async () => {
    try {
      const response = await axios.get('https://fe-student-api.herokuapp.com/api/hotels/popular');
      setHomesHotels(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getHomesHotels();
  }, []);

  return (
    <div className='container'>
      <div className='homes'>
        <h2 className='homes__heading'>Homes guests loves</h2>
        <Hotels hotelsData={homesHotels}/>
      </div>
    </div>
  );
};

export default HomesGuestsLoves;
