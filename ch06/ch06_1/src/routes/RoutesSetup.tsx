import {Routes, Route} from 'react-router-dom'
import NoMatch from './NoMatch'
import Home from './Home'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/welcome" element={<Home title="Welcome to our site" />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
