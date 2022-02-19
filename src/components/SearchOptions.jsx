import React from 'react';
import SearchOptionItem from './SearchOptionItem';
import ChildrenAgeQuestion from './ChildrenAgeQuestion';
import ChildrenAge from './ChildrenAge';

const SearchOptions = ({
                         adultsNumber,
                         childrenNumber,
                         roomsNumber,
                         setRoomsNumber,
                         setChildrenNumber,
                         setAdultsNumber,
                       }) => {
  const childrenAgeArr = [];
  for (let i = 0; i < childrenNumber; i++) {
    childrenAgeArr.push(<ChildrenAge key={i}/>);
  }

  return (
    <div  className='options' id='options'>
      <div className='options-items' id='options-items'>
        <SearchOptionItem text={'Adults'} number={adultsNumber}
                          setNumber={setAdultsNumber}
                          maxValue={30}/>
        <SearchOptionItem text={'Children'} number={childrenNumber}
                          setNumber={setChildrenNumber}
                          maxValue={10}/>
        <SearchOptionItem text={'Rooms'} number={roomsNumber}
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
export default SearchOptions;