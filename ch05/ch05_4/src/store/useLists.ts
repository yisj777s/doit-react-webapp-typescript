import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '../store'
import type {List} from '../store/commonTypes'
import * as LO from '../store/listidOrders'
import * as L from '../store/listEntities'
import * as C from '../store/cardEntities'
import * as LC from '../store/listidCardidOrders'

export const useLists = () => {
  const dispatch = useDispatch()

  const lists = useSelector<AppState, List[]>(({listidOrders, listEntities}) =>
    listidOrders.map(uuid => listEntities[uuid])
  )
  const listidCardidOrders = useSelector<AppState, LC.State>(
    ({listidCardidOrders}) => listidCardidOrders
  )

  const onCreateList = useCallback(
    (uuid: string, title: string) => {
      const list = {uuid, title}
      dispatch(LO.addListidToOrders(uuid))
      dispatch(L.addList(list))
      dispatch(LC.setListidCardids({listid: list.uuid, cardids: []}))
    },
    [dispatch]
  )
  const onRemoveList = useCallback(
    (listid: string) => () => {
      listidCardidOrders[listid].forEach(cardid => {
        dispatch(C.removeCard(cardid))
      })
      dispatch(LC.removeListid(listid))

      dispatch(L.removeList(listid))
      dispatch(LO.removeListidFromOrders(listid))
    },
    [dispatch, listidCardidOrders]
  )
  return {lists, onCreateList, onRemoveList}
}
