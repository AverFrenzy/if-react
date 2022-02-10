import {
  SET_ADULTS_NUMBER, SET_CHILDREN_NUMBER, SET_FOUND_HOTELS, SET_HOMES_HOTELS,
  SET_HOTEL_INFO, SET_IS_CALENDAR_VISIBLE, SET_IS_HOTELS_VISIBLE,
  SET_IS_LOGOUT_VISIBLE, SET_IS_OPTIONS_VISIBLE, SET_NEXT_CALENDAR_MONTH,
  SET_NEXT_CALENDAR_YEAR, SET_PREV_CALENDAR_MONTH, SET_PREV_CALENDAR_YEAR,
  SET_ROOMS_NUMBER, SET_SEARCH_INPUT, SET_USER_NAME_INPUT, SET_VISITING_DATES,
  SET_USER_PASSWORD_INPUT, SET_USER_PASSWORD, SET_USER_NAME,
} from '../constants';


export const setIsHotelVisibleActionCreator = (payload) => ({
    type: SET_IS_HOTELS_VISIBLE,
    payload,
  }
);

export const setIsOptionsVisibleActionCreator = (payload) => ({
    type: SET_IS_OPTIONS_VISIBLE,
    payload,
  }
);

export const setIsCalendarVisibleActionCreator = (payload) => ({
    type: SET_IS_CALENDAR_VISIBLE,
    payload,
  }
);

export const setIsLogoutVisibleActionCreator = (payload) => ({
    type: SET_IS_LOGOUT_VISIBLE,
    payload,
  }
);

export const setSearchInputActionCreator = (payload) => ({
    type: SET_SEARCH_INPUT,
    payload,
  }
);

export const setFoundHotelsActionCreator = (payload) => ({
    type: SET_FOUND_HOTELS,
    payload,
  }
);

export const setAdultsNumberActionCreator = (payload) => ({
    type: SET_ADULTS_NUMBER,
    payload,
  }
);

export const setChildrenNumberActionCreator = (payload) => ({
    type: SET_CHILDREN_NUMBER,
    payload,
  }
);

export const setRoomsNumberActionCreator = (payload) => ({
    type: SET_ROOMS_NUMBER,
    payload,
  }
);

export const setVisitingDatesActionCreator = (payload) => ({
    type: SET_VISITING_DATES,
    payload,
  }
);

export const setPrevCalendarMonthActionCreator = (payload) => ({
    type: SET_PREV_CALENDAR_MONTH,
    payload,
  }
);

export const setNextCalendarMonthActionCreator = (payload) => ({
    type: SET_NEXT_CALENDAR_MONTH,
    payload,
  }
);

export const setPrevCalendarYearActionCreator = (payload) => ({
    type: SET_PREV_CALENDAR_YEAR,
    payload,
  }
);

export const setNextCalendarYearActionCreator = (payload) => ({
    type: SET_NEXT_CALENDAR_YEAR,
    payload,
  }
);

export const setHomesHotelsActionCreator = (payload) => ({
    type: SET_HOMES_HOTELS,
    payload,
  }
);

export const setUserNameInputActionCreator = (payload) => ({
    type: SET_USER_NAME_INPUT,
    payload,
  }
);

export const setUserPasswordInputActionCreator = (payload) => ({
    type: SET_USER_PASSWORD_INPUT,
    payload,
  }
);

export const setUserNameActionCreator = (payload) => ({
    type: SET_USER_NAME,
    payload,
  }
);

export const setUserPasswordActionCreator = (payload) => ({
    type: SET_USER_PASSWORD,
    payload,
  }
);

export const setHotelInfoActionCreator = (payload) => ({
    type: SET_HOTEL_INFO,
    payload,
  }
);

