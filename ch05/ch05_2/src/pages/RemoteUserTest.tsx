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

  return (
    <section className="mb-4">
      <Title>RemoteUserTest</Title>
      <div className="mt-4"></div>
    </section>
  )
}
