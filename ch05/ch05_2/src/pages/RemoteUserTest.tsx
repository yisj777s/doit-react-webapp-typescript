import {useState, useCallback, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useToggle} from '../hooks'
import {Title, Avatar} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'
import type {AppState} from '../store'
import * as R from '../store/remoteUser'

export default function RemoteUserTest() {
  const dispatch = useDispatch()
  const user = useSelector<AppState, R.State>(({remoteUser}) => remoteUser)
  const [loading, toggleLoading] = useToggle()
  const [error, setError] = useState<Error | null>(null)

  const getRemoteUser = useCallback(() => {
    toggleLoading()
    D.fetchRandomUser()
      .then(user => dispatch(D.setUser(user)))
      .catch(setError)
      .finally(toggleLoading)
  }, [dispatch, toggleLoading])
  const changeName = useCallback(() => {
    toggleLoading()
    D.fetchRandomUser()
      .then(user => dispatch(R.changeName(user.name)))
      .catch(setError)
      .finally(toggleLoading)
  }, [dispatch, toggleLoading])
  const changeEmail = useCallback(
    () => dispatch(R.changeEmail(D.randomEmail())),
    [dispatch]
  )
  const changePicture = useCallback(() =>
    dispatch(R.changePicture({large: D.randomAvatar()}), [dispatch])
  )

  useEffect(getRemoteUser, [getRemoteUser])

  return (
    <section className="mb-4">
      <Title>RemoteUserTest</Title>
      <div className="mt-4"></div>
    </section>
  )
}
