import {Title, Avatar} from '../components'
import * as D from '../data'
import {useOrCreate} from './useOrCreate'

export default function CreateOrUseTest() {
  //prettier-ignore
  const headTexts = useOrCreate<string[]>('headText', () => [
    'NO.', 'NAME', 'JOB TITLE', 'EMAIL ADDRESS'
  ])
  const users = useOrCreate<D.IUser[]>('users', () =>
    D.makeArray(100).map(D.makeRandomUser)
  )

  const head = useOrCreate('head', () =>
    headTexts.map(text => <th key={text}>{text}</th>)
  )

  const body = useOrCreate('children', () =>
    users.map((user, index) => (
      <tr key={user.uuid}>
        <th>{index + 1}</th>
        <td className="flex items-center">
          <Avatar src={user.avatar} size="1.5rem" />
          <p className="ml-2">{user.name}</p>
        </td>
        <td>{user.jobTitle}</td>
        <td>{user.email}</td>
      </tr>
    ))
  )

  console.log('headTexts', headTexts)
  console.log('users => ', users)
  console.log('head =', head)
  console.log('body =', body)

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">UseOrCreateTest</h2>
      <div className="mt-4"></div>
    </section>
  )
}
