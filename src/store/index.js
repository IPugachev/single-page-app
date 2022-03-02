import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { filterReducer } from './filter/reducer'
import { roomsReducer } from './rooms/reducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  rooms: roomsReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
