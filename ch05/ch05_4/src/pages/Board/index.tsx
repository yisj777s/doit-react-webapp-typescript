import {useCallback, useMemo} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'
import BoardList from '../BoardList'
import type {AppState} from '../../store'
import type {List} from '../../store/commonTypes'
import * as LO from '../../store/listidOrders'
import * as L from '../../store/listEntities'

export default function Board() {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
    listidOrders.map(uuid => listEntities[uuid])
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(list.uuid))
      dispatch(L.addList(list))
    },
    [dispatch]
  )
  const onRemoveList = useCallback(
    (listid: string) => () => {
      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch]
  )

  const children = useMemo(
    () =>
      lists.map(list => (
        <BoardList key={list.uuid} list={list} onRemoveList={onRemoveList(list.uuid)} />
      )),
    [lists, onRemoveList]
  )
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="flex flex-wrap p-2 mt-4">
        {children}
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
