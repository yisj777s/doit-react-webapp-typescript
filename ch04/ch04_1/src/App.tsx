import Clock from './pages/Clock'

export default function App() {
  let today = new Date()
  return <Clock today={today} />
}
