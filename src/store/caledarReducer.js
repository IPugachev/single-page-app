const defaultState = {
  startDate: null,
  endDate: null,
}

export const calendarReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_CALENDAR':
      return { ...state }

    default:
      return state
  }
}
