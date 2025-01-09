import {useState, useCallback, useEffect} from 'react'
import {useToggle} from '../hooks'
import {Title, Avatar, Icon} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'

export default function FetchTest() {
  const [loading, toggleLoading] = useToggle()
  const [randomUser, setRandomUser] = useState<D.IRandomUser | null>(null)
  const [error, setError] = useState<Error | null>(null)

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">CopyMe</h2>
      <div className="mt-4"></div>
    </section>
  )
}
