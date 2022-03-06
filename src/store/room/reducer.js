import { roomActions } from './action'

export const roomReducer = (state = {}, action) => {
  switch (action.type) {
    case roomActions.SET_CURRENT_ROOM:
      return (state = action.payload.data)
    case roomActions.BOOK_ROOM:
      return { ...state, booked: true }
    default:
      return state
  }
}
