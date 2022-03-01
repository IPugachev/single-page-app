import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { filterReducer } from './filter/reducer'

const rootReducer = combineReducers({
  filter: filterReducer,
})

export const store = createStore(rootReducer, composeWithDevTools())
