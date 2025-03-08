import {useState, useCallback, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useToggle} from '../hooks'
import {Title} from '../components'

export default function CopyMe() {
  return (
    <section className="mb-80">
      <Title>RemoteUserTest</Title>
      <div className="mt-4"></div>
    </section>
  )
}
