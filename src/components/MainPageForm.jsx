import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

import SearchFormLoupeSVG from './svg/SearchFormLoupeSVG';
import SearchOptions from './SearchOptions';
import FullCalendar from './FullCalendar';
import {
  setFoundHotelsActionCreator,
  setIsCalendarVisibleActionCreator, setIsHotelVisibleActionCreator,
  setIsOptionsVisibleActionCreator, setSearchInputActionCreator
} from '../actionCreators';


const MainPageForm = ({
                        searchInput, roomsNumber, setFoundHotels, adultsNumber,
                        openOptions, openCalendar, showHotels, isOptionsVisible,
                        isCalendarVisible, setSearchInput, childrenNumber,
                        visitingDates,
                      }) => {

  const findHotels = async (event) => {
    event.preventDefault();
    if (!searchInput) {
      alert('write smth in a search string');
    } else {
      try {
        const response = await axios.get('https://fe-student-api.herokuapp.com/api/hotels', {
          params: {
            search: searchInput,
            adults: adultsNumber,
            children: childrenNumber,
            rooms: roomsNumber,
          }
        });
        setFoundHotels(response.data);
        showHotels();
        setTimeout(() => {
          const availableHotelsHeading = document.getElementById('available-hotels__heading');
          availableHotelsHeading.scrollIntoView({
            behavior: 'smooth'
          });
        }, 0);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <form className='search-form' id='main-page-form' method='GET'>
      <div className='search-form__group search-form__destination'>
        <SearchFormLoupeSVG/>
        <input value={searchInput} onChange={setSearchInput}
               type='text'
               name='search'
               id='search' autoComplete='off'
               className='search-form__destination__input'
               placeholder=' '
        />
        <label htmlFor='search' className='search-form__destination__label'>
          Your destination or hotel name
        </label>
      </div>
      <div className='search-form__group search-form__check'>
        <input type='text'
               name='check-in'
               id='check-in'
               className='search-form__check__input'
               placeholder=' '
        />
        <label htmlFor='check-in' className='search-form__check__label'>
          Check-in date
        </label>
        <input type='text'
               name='check-out'
               id='check-out'
               className='search-form__check__input'
               placeholder=' '
        />
        <label htmlFor='check-out' className='search-form__check__label'>
          Check-out date
        </label>
        <input onClick={openCalendar}
               type='text'
               name='check-in-check-out'
               id='check-in-check-out'
               className='search-form__check__input--desktop'
               autoComplete='off'
               placeholder=' '
               readOnly
        />
        <label htmlFor='check-in-check-out'
               className='search-form__check__label search-form__check__label--desktop'>
          {visitingDates[0] ? visitingDates[0].toString().slice(0, 10) : 'Check-in'}
          &nbsp; &mdash; &nbsp;
          {visitingDates[1] ? visitingDates[1].toString().slice(0, 10) : 'Check-out'}
        </label>
        {isCalendarVisible && <FullCalendar/>}
      </div>
      <div className='search-form__group search-form__other-info'>
        <input type='text'
               name='adults'
               id='adults'
               className='search-form__other-info__input'
               placeholder=' '/>
        <label htmlFor='adults' className='search-form__other-info__label'>
          Adults
        </label>
        <span className='divider'/>
        <input type='text'
               name='children'
               id='children'
               className='search-form__other-info__input'
               placeholder=' '
        />
        <label htmlFor='children' className='search-form__other-info__label'>
          Children
        </label>
        <span className='divider'/>
        <input type='text'
               name='rooms'
               id='rooms'
               className='search-form__other-info__input'
               placeholder=' '
        />
        <label htmlFor='rooms' className='search-form__other-info__label'>
          Rooms
        </label>
        <input onClick={openOptions}
               type='text'
               name='adults-children-rooms'
               id='adults-children-rooms'
               className='search-form__other-info__input--desktop'
               autoComplete='off'
               placeholder=' '
               readOnly
        />
        <label htmlFor='adults-children-rooms'
               className='search-form__other-info__label
               search-form__other-info__label--desktop'
               id='option-adults-children-rooms'>
          {adultsNumber} Adults
          &mdash; {childrenNumber} Children
          &mdash; {roomsNumber} Room
        </label>
        {isOptionsVisible && <SearchOptions/>}
      </div>
      <button onClick={findHotels}
              className='search-form__button'
              id='search-form__button'
              type='submit'>
        Search
      </button>
    </form>);
};

const mapStateToProps = (state) => ({
  isCalendarVisible: state.isCalendarVisible,
  isOptionsVisible: state.isOptionsVisible,
  searchInput: state.searchInput,
  adultsNumber: state.adultsNumber,
  childrenNumber: state.childrenNumber,
  roomsNumber: state.roomsNumber,
  visitingDates: state.visitingDates,
});

const mapDispatchToProps = (dispatch) => ({
    openCalendar: () => dispatch(setIsCalendarVisibleActionCreator(true)),
    openOptions: () => dispatch(setIsOptionsVisibleActionCreator(true)),
    showHotels: () => dispatch(setIsHotelVisibleActionCreator(true)),
    setSearchInput: (event) => dispatch(setSearchInputActionCreator(event.target.value)),
    setFoundHotels: (hotelsData) => dispatch(setFoundHotelsActionCreator(hotelsData)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(MainPageForm);

