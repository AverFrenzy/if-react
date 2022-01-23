import React, {useRef, useState} from 'react';
import SearchFormLoupeSVG from './svg/SearchFormLoupeSVG';
import axios from 'axios';
import SearchOptions from './SearchOptions';
import FullCalendar from './FullCalendar';

const MainPageForm = ({
                        setIsHotelsVisible,
                        searchInput,
                        setSearchInput,
                        setFoundHotels,
                        setIsCalendarVisible,
                        setIsOptionsVisible,
                        isCalendarVisible,
                        isOptionsVisible
                      }) => {

  const [adultsNumber, setAdultsNumber] = useState(1);
  const [childrenNumber, setChildrenNumber] = useState(0);
  const [roomsNumber, setRoomsNumber] = useState(1);
  const [childrenAge, setChildrenAge] = useState([]);
  const [visitingDates, setVisitingDates] = useState([null, null]);
  const [prevCalendarMonth, setPrevCalendarMonth] = useState(new Date().getMonth());
  const [nextCalendarMonth, setNextCalendarMonth] = useState(new Date().getMonth() + 1);
  const [prevCalendarYear, setPrevCalendarYear] = useState(new Date().getFullYear());
  const [nextCalendarYear, setNextCalendarYear] = useState(new Date().getFullYear());

  const searchInputRef = useRef(null)

  const changeInputText = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  const openSearchOptions = () => {
    setIsOptionsVisible(true);
  };

  const openCalendar = () => {
    setIsCalendarVisible(true)
  }

  const findHotels = async (event) => {
    try {
      if (!searchInput) {
        alert('write smth in a search string');
      } else {
        event.preventDefault();
        const response = await axios.get('https://fe-student-api.herokuapp.com/api/hotels', {
          params: {
            search: searchInput,
            adults: +adultsNumber,
            children : +childrenNumber,
            rooms: +roomsNumber,
          }
        });
        setFoundHotels(response.data);
        setIsHotelsVisible(true);
        setTimeout(() => {
          const availableHotelsHeading = document.getElementById('available-hotels__heading');
          availableHotelsHeading.scrollIntoView({
            behavior: 'smooth'
          });
        }, 0);

      }
    } catch (error) {
      console.log(error);
    }
  };

  return (<form className='search-form' id='main-page-form'
                method='GET'>
    <div className='search-form__group search-form__destination'>
      <SearchFormLoupeSVG/>
      <input ref={searchInputRef} value={searchInput} onChange={changeInputText} type='text'
             name='search'
             id='search' autoComplete='off'
             className='search-form__destination__input'
             placeholder=' '/>
      <label htmlFor='search' className='search-form__destination__label'>Your
        destination or hotel name</label>
    </div>
    <div className='search-form__group search-form__check'>
      <input type='text' name='check-in' id='check-in'
             className='search-form__check__input' placeholder=' '/>
      <label htmlFor='check-in' className='search-form__check__label'>Check-in
        date</label>
      <input type='text' name='check-out' id='check-out'
             className='search-form__check__input' placeholder=' '/>
      <label htmlFor='check-out' className='search-form__check__label'>Check-out
        date</label>
      <input type='text' name='check-in-check-out' id='check-in-check-out'
             className='search-form__check__input--desktop' autoComplete='off'
             placeholder=' '
             onClick={openCalendar}/>
      <label htmlFor='check-in-check-out'
             className='search-form__check__label search-form__check__label--desktop'>{`${visitingDates[0] ? visitingDates[0].toString().slice(0, 10) : 'Check-in'} — ${visitingDates[1] ? visitingDates[1].toString().slice(0, 10) : 'Check-out'}`}</label>
      {isCalendarVisible &&
        <FullCalendar prevCalendarMonth={prevCalendarMonth}
                      nextCalendarMonth={nextCalendarMonth}
                      prevCalendarYear={prevCalendarYear}
                      nextCalendarYear={nextCalendarYear}
                      setPrevCalendarMonth={setPrevCalendarMonth}
                      setNextCalendarMonth={setNextCalendarMonth}
                      setPrevCalendarYear={setPrevCalendarYear}
                      setNextCalendarYear={setNextCalendarYear}
                      visitingDates={visitingDates}
                      setVisitingDates={setVisitingDates}

        />}
    </div>
    <div className='search-form__group search-form__other-info'>
      <input type='text' name='adults' id='adults'
             className='search-form__other-info__input' placeholder=' '/>
      <label htmlFor='adults'
             className='search-form__other-info__label'>Adults</label>
      <span className='divider'/>
      <input type='text' name='children' id='children'
             className='search-form__other-info__input' placeholder=' '/>
      <label htmlFor='children'
             className='search-form__other-info__label'>Children</label>
      <span className='divider'/>
      <input type='text' name='rooms' id='rooms'
             className='search-form__other-info__input' placeholder=' '/>
      <label htmlFor='rooms'
             className='search-form__other-info__label'>Rooms</label>
      <input type='text' name='adults-children-rooms'
             id='adults-children-rooms'
             className='search-form__other-info__input--desktop'
             autoComplete='off' placeholder=' '
             onClick={openSearchOptions}/>
      <label htmlFor='adults-children-rooms'
             className='search-form__other-info__label
               search-form__other-info__label--desktop'
             id='option-adults-children-rooms'>
        {adultsNumber} Adults
        &mdash; {childrenNumber} Children
        &mdash; {roomsNumber} Room
      </label>
      {isOptionsVisible && <SearchOptions adultsNumber={adultsNumber}
                                          childrenNumber={childrenNumber}
                                          roomsNumber={roomsNumber}
                                          setAdultsNumber={setAdultsNumber}
                                          setChildrenNumber={setChildrenNumber}
                                          setRoomsNumber={setRoomsNumber}
                                          childrenAge={childrenAge}
                                          setChildrenAge={setChildrenAge}
      />}
    </div>
    <button onClick={findHotels} className='search-form__button'
            id='search-form__button'
            type='submit'>Search
    </button>
  </form>);
};

export default MainPageForm;
