import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Title, Subtitle} from '../components'
import {Icon} from '../theme/daisyui'
import type {AppState} from '../store'
import * as C from '../store/counter'

export default function CounterTest() {
  const dispatch = useDispatch()

  const counter = useSelector<AppState, C.State>(({counter}) => counter)

  return (
    <section className="mt-4">
      <Title>CounterTest</Title>
      <div className="mt-4"></div>
    </section>
  )
}
