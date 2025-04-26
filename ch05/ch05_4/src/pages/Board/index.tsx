import {useCallback} from 'react'
import {useDispatch} from 'react-redux'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from '../BoardList'
import type {AppState} from '../../store'
import type {List} from '../../store/commonTypes'
import * as LO from '../../store/listidOrders'
import * as L from '../../store/listEntities'

export default function Board() {
  const dispatch = useDispatch()

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(list.uuid))
      dispatch(L.addList(list))
    },
    [dispatch]
  )
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div>
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
