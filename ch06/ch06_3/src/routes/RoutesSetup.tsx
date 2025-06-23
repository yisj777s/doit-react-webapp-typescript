import {Routes, Route} from 'react-router-dom'
import Layout from './Layout'
import LandingPage from './LandingPage'
import Board from '../pages/Board'
import Signup from './Auth/SignUp'
import Login from './Auth/Login'
import Logout from './Auth/Logout'
import NoMatch from './NoMatch'

export default function RoutesSetup() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path="/board" element={<Board />} />
        <Route path="*" element={<NoMatch />} />
      </Route>
      <Route path="/signup" element={<Signup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="*" element={<NoMatch />} />
    </Routes>
  )
}
