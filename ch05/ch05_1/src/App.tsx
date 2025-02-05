import type {Action} from 'redux'
import {Provider as ReduxProvider} from 'react-redux'
import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'

export default function App() {
  return (
    <ReduxProvider>
      <main>
        <UseReducerClock />
        <ReduxClock />
      </main>
    </ReduxProvider>
  )
}
