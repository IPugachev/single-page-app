import { createStore } from 'redux'
import { guestsReducer } from './guestsReducer'

export const store = createStore(guestsReducer)
