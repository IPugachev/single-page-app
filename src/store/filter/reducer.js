import { filterActions } from './action'

export const initialState = {
  hasAccount: false,
  isAuth: false,
  name: '',
  lastName: '',
  entryDate: null,
  endDate: null,
  roomNumber: 888,
  from: 0,
  to: 150,
  smoking: false,
  pets: false,
  party: false,
  wideHall: false,
  invalidHelper: false,
  bedrooms: 0,
  breakfast: false,
  table: false,
  babyChair: false,
  babyBed: false,
  tv: false,
  shampoo: false,
  user: '',
  guests: [
    { title: 'взрослые', count: 0, name: 'guestsAdults' },
    { title: 'дети', count: 0, name: 'guestsKids' },
    { title: 'младенцы', count: 0, name: 'guestsBabies' },
  ],
  rooms: [
    { title: 'спальни', count: 0, name: 'bedrooms' },
    { title: 'кровати', count: 0, name: 'beds' },
    { title: 'ванные комнаты', count: 0, name: 'bathrooms' },
  ],
}

export const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case filterActions.CHANGE_VALUES:
      return { ...state, [action.payload.name]: action.payload.value }
    case filterActions.CHANGE_DROPDOWN_VALUES:
      return { ...state, [action.payload.type]: action.payload.changedValues }
    case filterActions.REGISTRATION_USER:
      return { ...state, user: [...state.user, action.payload.newUser] }
    default:
      return state
  }
}
