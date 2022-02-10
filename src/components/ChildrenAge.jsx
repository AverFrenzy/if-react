import React from 'react';

const ChildrenAge = () => {
  let options = []
  for (let i = 1; i <= 17; i++) {
    options.push(<option key={i}>{i} years old</option>)
  }

  return (
    <div className='options-select-item'>
      <select  name='options-child-age' className='options-child-age-select'>
        {options}
      </select>
    </div>
  );
};

export default ChildrenAge;