import React from 'react';

const dayNames = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
const months = [
  'January', 'February', 'March',
  'April', 'May', 'June',
  'July', 'August', 'September',
  'October', 'November', 'December',
];

const Calendar = ({
                    calendarMonth,
                    setCalendarMonth,
                    calendarYear,
                    setCalendarYear,
                    setVisitingDates,
                    visitingDates,
                  }) => {
  const calculateDaysInMonth = (() => new Date(calendarYear, calendarMonth + 1, 0).getDate())();
  const getCurrMonthName = (() => months[calendarMonth])();

  let daysFromPrevMonth = [];
  for (let x = new Date(calendarYear, calendarMonth, 0).getDay(); x > 0; x--) {
    daysFromPrevMonth.push(<span key={x} className='calendar-days'>{''}</span>);
  }

  let daysInMonth = [];
  for (let day = 1; day <= calculateDaysInMonth; day++) {
    const dayDate = new Date(calendarYear, calendarMonth, day);
    if (dayDate < new Date(new Date().setHours(0, 0, 0, 0))) {

      daysInMonth.push(<span key={day}
                             className='calendar-days calendar-days-unactive'>{day}</span>);
    } else if (dayDate.toString() === new Date(new Date().setHours(0, 0, 0, 0)).toString()) {
      daysInMonth.push(<span key={day}
                             className={dayDate.toString() === visitingDates[0]?.toString() ? 'calendar-days-clicked' : 'calendar-days calendar-days-curr-day'}>{day}</span>);
    } else if (visitingDates.length === 2
      && dayDate > visitingDates[0]
      && dayDate < visitingDates[1]) {
      daysInMonth.push(<span key={day}
                             className='calendar-days-active'>{day}</span>);
    } else {
      daysInMonth.push(<span key={day}
                             className={dayDate.toString() === visitingDates[0]?.toString() || dayDate.toString() === visitingDates[1]?.toString() ? 'calendar-days-clicked' : 'calendar-days'}
      >{day}</span>);
    }
  }

  const calendarDaysNameItems = dayNames.map((item, index) => {
    return (
      <span className='calendar-days-name' key={index}>{item}</span>
    );
  });

  const pickDate = (event) => {
    event.preventDefault();
    if (event.target.tagName === 'SPAN') {
      const dateInfo = new Date(calendarYear, calendarMonth, Number(event.target.innerHTML));
      const visitingDatesCopy = [...visitingDates];
      if (!visitingDates[0]) {
        visitingDatesCopy[0] = dateInfo;
        setVisitingDates(visitingDatesCopy);
      } else if (visitingDates[0] && !visitingDates[1]) {
        visitingDatesCopy[1] = dateInfo;
        if ((visitingDates[0] > dateInfo)) {
          const ambry = visitingDatesCopy[0];
          visitingDatesCopy[0] = visitingDatesCopy[1];
          visitingDatesCopy[1] = ambry;
        }
        setVisitingDates(visitingDatesCopy);
      } else {
        setVisitingDates([null, null]);
      }
    }
  };

  const getNextMonth = (event) => {
    event.preventDefault();
    if (calendarMonth < 11) {
      setCalendarMonth(calendarMonth + 1);
    } else {
      setCalendarYear(calendarYear + 1);
      setCalendarMonth(0);
    }
  };

  const getPrevMonth = (event) => {
    event.preventDefault();
    if (calendarMonth > 0) {
      setCalendarMonth(calendarMonth - 1);
    } else {
      setCalendarYear(calendarYear - 1);
      setCalendarMonth(11);
    }
  };

  return (
    <div className='calendar'>
      <div className='calendar-month-box'>
        <button className='calendar-button-prev'
                id='calendar-button-prev'
                onClick={getPrevMonth}
        />
        <p className='calendar-month'>{getCurrMonthName} {calendarYear}</p>
        <button className='calendar-button-next'
                id='calendar-button-next'
                onClick={getNextMonth}
        />
      </div>

      <div className='calendar-days-name-box'>
        {calendarDaysNameItems}
      </div>
      <div className='calendar-days-box' id='calendar-days-box-1'
           onClick={pickDate}>
        {daysFromPrevMonth}
        {daysInMonth}
      </div>
    </div>
  );
};

export default Calendar;