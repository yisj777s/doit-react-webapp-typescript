import {Action} from 'redux'
import {AppState} from './AppState'

const initialAppState = {
  today: new Date()
}
export const rootReducer = (state: AppState = initialAppState, action: Action) => state
