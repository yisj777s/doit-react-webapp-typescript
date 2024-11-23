import {useEffect} from 'react'
import Clock from './pages/Clock'

export default function App() {
  let today = new Date()
  useEffect(() => {
    console.log('useEffect called.')
    const duration = 1000
    const id = setInterval(() => {
      today = new Date()
      console.log('today', today.toLocaleTimeString())
    }, duration)
  }, [])
  return <Clock today={today} />
}
