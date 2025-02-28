import {useSelector, useDispatch} from 'react-redux'
import {Title} from '../components'
import {useInterval} from '../hooks'
import type {AppState} from '../store'
import * as C from '../store/clock'

export default function ClockTest() {
  return (
    <section className="mt-4">
      <Title>ClockTest</Title>
      <div className="mt-4"></div>
    </section>
  )
}
