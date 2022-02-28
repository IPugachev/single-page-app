const defaultState = {
  defaultValues: { min: 0, max: 150 },
  min: 0,
  max: 150,
}

export const sliderReducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'CHANGE_SLIDER':
      return { ...state, max: action.update.max, min: action.update.min }

    default:
      return state
  }
}
