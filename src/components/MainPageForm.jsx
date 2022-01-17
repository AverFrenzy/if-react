import React, {useState} from 'react';
import SearchFormLoupeSVG from './svg/SearchFormLoupeSVG';

const MainPageForm = ({setIsHotelsVisible, searchInput, setSearchInput}) => {

  const changeInputText = (event) => {
    event.preventDefault();
    setSearchInput(event.target.value);
  };

  return (
    <form className='search-form' id='main-page-form'
          method='GET'>
      <div className='search-form__group search-form__destination'>
        <SearchFormLoupeSVG/>
        <input value={searchInput} onChange={changeInputText} type='text'
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
               placeholder=' '/>
        <label htmlFor='check-in-check-out'
               className='search-form__check__label search-form__check__label--desktop'>Check-in &mdash; Check-out</label>
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
               autoComplete='off' placeholder=' '/>
        <label htmlFor='adults-children-rooms'
               className='search-form__other-info__label search-form__other-info__label--desktop'
               id='option-adults-children-rooms'>2 Adults &mdash; 0
          Children &mdash; 1 Room</label>
      </div>
      <button onClick={(event) => {
        event.preventDefault();
        setIsHotelsVisible(true);
      }} className='search-form__button' id='search-form__button'
              type='submit'>Search
      </button>
    </form>
  );
};

export default MainPageForm;
