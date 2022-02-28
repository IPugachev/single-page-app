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
}

export const dropdownReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_GUESTS':
      return { ...state, guests: action.update }
    case 'CHANGE_ROOMS':
      return { ...state, rooms: action.update }
    default:
      return state
  }
}
