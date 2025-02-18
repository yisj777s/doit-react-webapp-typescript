import {Actions} from './actions'
import {AppState} from './AppState'

const initialAppState = {
  today: new Date()
}
export const rootReducer = (state: AppState = initialAppState, action: Actions) => {
  switch (action.type) {
    case 'setToday': {
      return {...state, today: action.today}
    }
  }
  return state // 필수
}
