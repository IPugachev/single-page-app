import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { filterReducer } from './filter/reducer'
import { profileReducer } from './profile/reducer'
import { roomReducer } from './room/reducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  profile: profileReducer,
  room: roomReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
