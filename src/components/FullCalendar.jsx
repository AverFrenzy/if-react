import React from 'react';
import {connect} from 'react-redux';

import Calendar from './Calendar';
import {
  setNextCalendarMonthActionCreator, setNextCalendarYearActionCreator,
  setPrevCalendarMonthActionCreator, setPrevCalendarYearActionCreator,
  setVisitingDatesActionCreator
} from '../actionCreators';


function FullCalendar({
                        prevCalendarMonth, setPrevCalendarMonth, visitingDates,
                        nextCalendarMonth, setNextCalendarMonth,
                        prevCalendarYear, setPrevCalendarYear, nextCalendarYear,
                        setNextCalendarYear, setVisitingDates,
                      }) {

  return (
    <div onClick={(event => event.stopPropagation())}
         className='calendar-container'>
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

const mapStateToProps = (state) => ({
  prevCalendarMonth: state.prevCalendarMonth,
  nextCalendarMonth: state.nextCalendarMonth,
  prevCalendarYear: state.prevCalendarYear,
  nextCalendarYear: state.nextCalendarYear,
  visitingDates: state.visitingDates,
});

const mapDispatchToProps = (dispatch) => ({
    setPrevCalendarMonth: (value) => dispatch(setPrevCalendarMonthActionCreator(value)),
    setNextCalendarMonth: (value) => dispatch(setNextCalendarMonthActionCreator(value)),
    setPrevCalendarYear: (value) => dispatch(setPrevCalendarYearActionCreator(value)),
    setNextCalendarYear: (value) => dispatch(setNextCalendarYearActionCreator(value)),
    setVisitingDates: (datesInfo) => dispatch(setVisitingDatesActionCreator(datesInfo)),
  }
);

export default connect(mapStateToProps, mapDispatchToProps)(FullCalendar);
