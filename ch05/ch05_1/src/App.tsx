import type {Action} from 'redux'
import {Provider as ReduxProvider} from 'react-redux'
import {configureStore} from '@reduxjs/toolkit'
import ReduxClock from './pages/ReduxClock'
import UseReducerClock from './pages/UseReducerClock'

type AppState = {
  today: Date
}
const initialAppState = {
  today: new Date()
}
const rootReducer = (state: AppState = )

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
