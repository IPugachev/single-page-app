import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { filterReducer } from './filter/reducer'
import { profileReducer } from './profile/reducer'

const rootReducer = combineReducers({
  filter: filterReducer,
  profile: profileReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
