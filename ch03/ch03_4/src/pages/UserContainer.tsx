import {Title} from '../components'
import * as D from '../data'
import User from './User'

export default function UserContainer() {
  const children = D.makeArray(10).map(D.makeRandomUser)

  return (
    <section>
      <Title>UserContainer</Title>
      <div></div>
    </section>
  )
}
