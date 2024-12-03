import {useMemo} from 'react'
import {Title, Avatar} from '../components'
import * as D from '../data'

export default function Memo() {
  //prettier-ignore
  const headTexts = useMemo<string[]>(() => [
    'NO', 'NAME', 'JOB TITLE', 'EMAIL ADDRESS'
  ], [])
  const users = useMemo<D.IUser[]>(() => D.makeArray(100).map(D.makeRandomUser), [])

  const head = useMemo(
    () => headTexts.map(text => <th key={text}>{text}</th>),
    [headTexts]
  )

  console.log('headText =>', headTexts)
  console.log('head =>', head)

  return <div></div>
}
