import {Actions} from './actions'
import {AppState} from './AppState'

const initialAppState = {
  today: new Date()
}
export const rootReducer = (prevState: AppState = initialAppState, action: Actions) => {
  const newState = {...prevState} // 깊은 복사 필요
  return newState
}
