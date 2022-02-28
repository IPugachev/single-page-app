const defaultState = {
  guests: [
    { title: 'взрослые', count: 0 },
    { title: 'дети', count: 0 },
    { title: 'младенцы', count: 0 },
  ],
  rooms: [
    { title: 'спальни', count: 2 },
    { title: 'кровати', count: 2 },
    { title: 'ванные комнаты', count: 0 },
  ],
  value: 0,
}

export const guestsReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'add':
      return { ...state, value: state.value + 1 }
    case 'sub':
      return { ...state, value: state.value - 1 }
    default:
      return state
  }
}
