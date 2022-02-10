import React from 'react';
import {connect} from 'react-redux';

import Hotels from './Hotels';


const AvailableHotels = ({foundHotels}) => {
  return (
    <div className='container'>
      <div className='homes'>
        <h2 className='homes__heading'
            id='available-hotels__heading'>Available Hotels</h2>
        <Hotels hotelsData={foundHotels}/>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  foundHotels: state.foundHotels,
});

export default connect(mapStateToProps)(AvailableHotels);
