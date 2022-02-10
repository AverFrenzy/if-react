import {
  SET_ADULTS_NUMBER, SET_CHILDREN_NUMBER, SET_FOUND_HOTELS, SET_HOMES_HOTELS,
  SET_HOTEL_INFO, SET_IS_CALENDAR_VISIBLE, SET_IS_HOTELS_VISIBLE,
  SET_IS_LOGOUT_VISIBLE, SET_IS_OPTIONS_VISIBLE, SET_NEXT_CALENDAR_MONTH,
  SET_NEXT_CALENDAR_YEAR, SET_PREV_CALENDAR_MONTH, SET_PREV_CALENDAR_YEAR,
  SET_ROOMS_NUMBER, SET_SEARCH_INPUT, SET_USER_NAME_INPUT, SET_VISITING_DATES,
  SET_USER_PASSWORD_INPUT, SET_USER_PASSWORD, SET_USER_NAME,
} from '../constants';


const mainState = {
  isHotelsVisible: false,
  isOptionsVisible: false,
  isCalendarVisible: false,
  isLogoutVisible: false,
  searchInput: '',
  foundHotels: [],
  adultsNumber: 1,
  childrenNumber: 0,
  roomsNumber: 1,
  visitingDates: [null, null],
  prevCalendarMonth: new Date().getMonth(),
  nextCalendarMonth: new Date().getMonth() + 1,
  prevCalendarYear: new Date().getFullYear(),
  nextCalendarYear: new Date().getFullYear(),
  homesHotels: [],
  userNameInput: '',
  userPasswordInput: '',
  hotelInfo: [],
  userName:'',
  userPassword: '',
};

const mainReducer = (state = mainState, action) => {
  switch (action.type) {
    case SET_IS_HOTELS_VISIBLE:
      return {...state, isHotelsVisible: action.payload, searchInput: ''};
    case SET_IS_OPTIONS_VISIBLE:
      return {...state, isOptionsVisible: action.payload};
    case SET_IS_CALENDAR_VISIBLE:
      return {...state, isCalendarVisible: action.payload};
    case SET_IS_LOGOUT_VISIBLE:
      return {...state, isLogoutVisible: action.payload};
    case SET_SEARCH_INPUT:
      return {...state, searchInput: action.payload};
    case SET_FOUND_HOTELS:
      return {...state, foundHotels: action.payload};
    case SET_ADULTS_NUMBER:
      return {...state, adultsNumber: action.payload};
    case SET_CHILDREN_NUMBER:
      return {...state, childrenNumber: action.payload};
    case SET_ROOMS_NUMBER:
      return {...state, roomsNumber: action.payload};
    case SET_VISITING_DATES:
      return {...state, visitingDates: action.payload};
    case SET_PREV_CALENDAR_MONTH:
      return {...state, prevCalendarMonth: action.payload};
    case SET_NEXT_CALENDAR_MONTH:
      return {...state, nextCalendarMonth: action.payload};
    case SET_PREV_CALENDAR_YEAR:
      return {...state, prevCalendarYear: action.payload};
    case SET_NEXT_CALENDAR_YEAR:
      return {...state, nextCalendarYear: action.payload};
    case SET_HOMES_HOTELS:
      return {...state, homesHotels: action.payload};
    case SET_USER_NAME_INPUT:
      return {...state, userNameInput: action.payload};
    case SET_USER_PASSWORD_INPUT:
      return {...state, userPasswordInput: action.payload};
    case SET_USER_NAME:
      return {...state, userName: action.payload};
    case SET_USER_PASSWORD:
      return {...state, userPassword: action.payload};
    case SET_HOTEL_INFO:
      return {...state, hotelInfo: action.payload};
    default:
      return state;
  }
};

export default mainReducer;