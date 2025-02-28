import * as T from './types'

const initialState: T.State = new Date().toISOString()

export const reducer = (state: T.State = initialState, action: T.Actions) => {
  return state
}
