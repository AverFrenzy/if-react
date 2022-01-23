import React from 'react';
import Calendar from './Calendar';

function FullCalendar({
                        prevCalendarMonth,
                        setPrevCalendarMonth,
                        nextCalendarMonth,
                        setNextCalendarMonth,
                        prevCalendarYear,
                        setPrevCalendarYear,
                        nextCalendarYear,
                        setNextCalendarYear,
                        setVisitingDates,
                        visitingDates
                      }) {
  return (
    <div className='calendar-container'>
      <Calendar calendarMonth={prevCalendarMonth}
                setCalendarMonth={setPrevCalendarMonth}
                calendarYear={prevCalendarYear}
                setCalendarYear={setPrevCalendarYear}
                visitingDates={visitingDates}
                setVisitingDates={setVisitingDates}

      />
      <Calendar calendarMonth={nextCalendarMonth}
                setCalendarMonth={setNextCalendarMonth}
                calendarYear={nextCalendarYear}
                setCalendarYear={setNextCalendarYear}
                visitingDates={visitingDates}
                setVisitingDates={setVisitingDates}
      />
    </div>
  );
}

export default FullCalendar;