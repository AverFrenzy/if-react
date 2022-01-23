import React, {useEffect, useState} from 'react';
import Header from './Header';
import HotelInfo from './HotelInfo';
import Footer from '../containers/Footer';
import axios from 'axios';
import {useParams} from 'react-router-dom';

const ChosenHotelInfo = () => {
  const [hotelInfo, setHotelInfo] = useState(null);
  const {hotelId} = useParams()

  const getHotelInfo = async () => {
    try {
      const response = await axios.get(`https://fe-student-api.herokuapp.com/api/hotels/${hotelId}`);
      console.log(response.data);
      setHotelInfo(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getHotelInfo()
  }, []);

  return (
    <div className='App'>
      <div className='chosen-hotel-container'>
        <div className='container'>
          <Header/>
          <h2 className='chosen-hotel-name'>{hotelInfo?.name}</h2>
          <h3 className='chosen-hotel-city'>{hotelInfo?.city}, {hotelInfo?.country}</h3>
          <HotelInfo  imgUrl={hotelInfo?.imageUrl}/>
          <div className='chosen-hotel-buttons'>
            <button className='chosen-hotel-button'>Watch reviews</button>
            <button className='chosen-hotel-button'>Share</button>
            <button className='chosen-hotel-button'>Add to favorite</button>
            <button className='chosen-hotel-booking-button'>Book a room</button>
          </div>
          <div className='chosen-hotel-details'>
            <div>
              <ul>
                <li className='chosen-hotel-details-heading'>Services and
                  amenities
                </li>
                <li className='chosen-hotel-details-text'>Free parking</li>
                <li className='chosen-hotel-details-text'>Free Wi-Fi</li>
                <li className='chosen-hotel-details-text'>Swimming pool</li>
                <li className='chosen-hotel-details-text'>Bar</li>
                <li className='chosen-hotel-details-text'>Bowling</li>
                <li className='chosen-hotel-details-text'>Babysitting services
                </li>
                <li className='chosen-hotel-details-text'>Massage services</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='chosen-hotel-details-heading'>Room equipment</li>
                <li className='chosen-hotel-details-text'>Hypoallergenic room
                </li>
                <li className='chosen-hotel-details-text'>Coffee maker</li>
                <li className='chosen-hotel-details-text'>Light blocking
                  curtains
                </li>
                <li className='chosen-hotel-details-text'>Satellite TV</li>
                <li className='chosen-hotel-details-text'>Modern shower cabin
                </li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='chosen-hotel-details-heading'>Room types</li>
                <li className='chosen-hotel-details-text'>City view</li>
                <li className='chosen-hotel-details-text'>Non-smoking rooms</li>
                <li className='chosen-hotel-details-text'>Smoking rooms</li>
                <li className='chosen-hotel-details-text'>Honeymoon Suite</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className='chosen-hotel-details-heading'>Languages</li>
                <li className='chosen-hotel-details-text'>English</li>
                <li className='chosen-hotel-details-text'>Russian</li>
                <li className='chosen-hotel-details-text'>Polish</li>
                <li className='chosen-hotel-details-text'>Deutsch</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default ChosenHotelInfo;