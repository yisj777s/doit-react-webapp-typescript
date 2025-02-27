import type {Action} from 'redux'

export type State = string

export type SetClockActions = Action<'@clock/setClock'> & {
  payload: State
}

export type Actions = SetClockActions
