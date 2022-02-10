import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import axios from 'axios';

import Hotels from '../components/Hotels';
import {setHomesHotelsActionCreator,} from '../actionCreators';


const HomesGuestsLoves = ({homesHotels, setHomesHotels}) => {

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

const mapStateToProps = (state) => ({
  homesHotels: state.homesHotels,
});

const mapDispatchToProps = (dispatch) => ({
    setHomesHotels: (hotelsData) => dispatch(setHomesHotelsActionCreator(hotelsData)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(HomesGuestsLoves);

