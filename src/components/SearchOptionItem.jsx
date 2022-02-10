import React from 'react';


const SearchOptionItem = ({text, number, setNumber, maxValue}) => {

  const addOne = (event) => {
    event.preventDefault();
    if (number < maxValue) {
      setNumber(number + 1);
    }
  };

  const removeOne = (event) => {
    event.preventDefault();
    if (number > 0) {
      setNumber(number - 1);
    }
  };

  return (
    <div className='options-item'>
      <div className='options-description-text'>
        <span>{text}</span>
      </div>
      <div className='options-item-buttons'>
        <button className='options-button options-minus-button_js'
                id='options-minus-button-${index}'
                type='submit'
                data-num='${index}'
                onClick={removeOne}
                disabled={number === 0}>
          —
        </button>
        <span className='options-counter-number'>{number}</span>
        <button className='options-button options-plus-button_js'
                id='options-plus-button-${index}'
                type='submit'
                data-num='${index}'
                onClick={addOne}
                disabled={number === maxValue}>
          +
        </button>
      </div>
    </div>);
};

export default SearchOptionItem;