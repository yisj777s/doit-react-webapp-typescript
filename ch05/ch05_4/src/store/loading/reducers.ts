import * as T from './types'

const initialState: T.State = false

export const reducer = (state: T.State = initialState, action:T.Actions) => {
  switch (action.type) {
    case '@loading/setLoadingAction':
      return action.payload
  }
  return state
}
