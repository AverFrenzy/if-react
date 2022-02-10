import React from 'react';
import {connect} from 'react-redux';

import SearchOptionItem from './SearchOptionItem';
import ChildrenAgeQuestion from './ChildrenAgeQuestion';
import ChildrenAge from './ChildrenAge';
import {
  setAdultsNumberActionCreator, setChildrenNumberActionCreator,
  setRoomsNumberActionCreator,
} from '../actionCreators';


const SearchOptions = ({
                         adultsNumber, childrenNumber, roomsNumber,
                         setRoomsNumber, setChildrenNumber, setAdultsNumber,
                       }) => {

  const childrenAgeArr = [];
  for (let i = 0; i < childrenNumber; i++) {
    childrenAgeArr.push(<ChildrenAge key={i}/>);
  }

  return (
    <div onClick={(event) => event.stopPropagation()}
         className='options'
         id='options'>
      <div className='options-items' id='options-items'>
        <SearchOptionItem text={'Adults'}
                          number={adultsNumber}
                          setNumber={setAdultsNumber}
                          maxValue={30}/>
        <SearchOptionItem text={'Children'}
                          number={childrenNumber}
                          setNumber={setChildrenNumber}
                          maxValue={10}/>
        <SearchOptionItem text={'Rooms'}
                          number={roomsNumber}
                          setNumber={setRoomsNumber}
                          maxValue={30}/>
      </div>
      {childrenNumber ? <ChildrenAgeQuestion/> : null}
      <div className='options-select-items' id='options-select-items'>
        {childrenNumber ? childrenAgeArr : null}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  adultsNumber: state.adultsNumber,
  childrenNumber: state.childrenNumber,
  roomsNumber: state.roomsNumber,
});

const mapDispatchToProps = (dispatch) => ({
    setAdultsNumber: (value) => dispatch(setAdultsNumberActionCreator(value)),
    setChildrenNumber: (value) => dispatch(setChildrenNumberActionCreator(value)),
    setRoomsNumber: (value) => dispatch(setRoomsNumberActionCreator(value)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(SearchOptions);