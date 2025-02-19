import {useReducer} from 'react'
import type {AppState} from '../store'
import type {SetTodayAction} from '../store/actions'
import {Div, Title, Subtitle} from '../components'
import {useInterval} from '../hooks'

export default function ReduxClock() {
  const [{today}, dispatch] = useReducer()

  useInterval(() => {
    dispatch({type: 'setToday', today: new Date()})
  })

  return (
    <Div className="flex flex-col items-center justify-center mt-16">
      <Title className="text-5xl">ReduxClock</Title>
      <Title className="mt-4 text-3xl">{today.toLocaleTimeString()}</Title>
      <Subtitle className="mt-4 text-2xl">{today.toLocaleDateString()}</Subtitle>
    </Div>
  )
}
