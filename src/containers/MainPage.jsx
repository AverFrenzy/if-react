import React, {useRef} from 'react';
import {connect} from 'react-redux';

import Header from '../components/Header';
import MainPageForm from '../components/MainPageForm';
import MainPageApps from '../components/MainPageApps';
import {
  setIsCalendarVisibleActionCreator, setIsLogoutVisibleActionCreator,
  setIsOptionsVisibleActionCreator
} from '../actionCreators';


const MainPage = ({closeCalendar, closeOptions, closeLogout}) => {
  const mainPageRef = useRef(null);

  const closeParams = (event) => {
    event.stopPropagation();
    const conditionToCloseParams =
      event.currentTarget === mainPageRef.current
      && event.target.tagName !== 'INPUT'
      && event.target.tagName !== 'LABEL';
    if (conditionToCloseParams) {
      closeCalendar();
      closeOptions();
      closeLogout();
    }
  };

  return (
    <div ref={mainPageRef} onClick={closeParams}
         className='main-page-container'>
      <div className='container'>
        <Header/>
        <h1 className='main-page__heading'>
          Discover stays <br/>to live, work or just relax
        </h1>
        <MainPageForm/>
        <MainPageApps/>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
    closeCalendar: () => dispatch(setIsCalendarVisibleActionCreator(false)),
    closeOptions: () => dispatch(setIsOptionsVisibleActionCreator(false)),
    closeLogout: () => dispatch(setIsLogoutVisibleActionCreator(false)),
  }
);

export default connect(null, mapDispatchToProps)(MainPage);


