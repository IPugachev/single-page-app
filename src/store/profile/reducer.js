import { profileActions } from './action'

export const initialState = {
  hasAccount: false,
  isAuth: false,
  firstName: '',
  lastName: '',
  user: [],
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case profileActions.REGISTRATION_USER:
      return { ...state, user: [...state.user, action.payload.newUser] }
    case profileActions.SET_USER_STATUS:
      return { ...state, [action.payload.name]: action.payload.value }
    default:
      return state
  }
}
