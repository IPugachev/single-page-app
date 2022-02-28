import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { calendarReducer } from './caledarReducer'
import { checkboxReducer } from './checkboxReducer'
import { dropdownReducer } from './dropdownReducer'
import { sliderReducer } from './sliderReducer'

const rootReducer = combineReducers({
  dropdown: dropdownReducer,
  checkbox: checkboxReducer,
  slider: sliderReducer,
  calendar: calendarReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
