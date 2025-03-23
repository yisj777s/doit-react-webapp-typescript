import {useCallback, useMemo, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Icon} from '../../theme/daisyui'
import * as D from '../../data'
import type {AppState} from '../../store'
import * as C from '../../store/cards'
import {Title} from '../../components'
import Card from './Card'

const makeCard = () =>
  D.makeCard(D.randomUUID(), D.makeRandomUser(), D.randomImage(200, 100), '', '', '', '')

export default function CardsTest() {
  const dispatch = useDispatch()
  const cards = useSelector<AppState, C.State>(({cards}) => cards)
  const addCard = useCallback(() => {
    dispatch(C.addCard(makeCard()))
  }, [dispatch])
  const removeCard = useCallback(
    (id: string) => () => dispatch(C.removeCard(id)),
    [dispatch]
  )
  const children = useMemo(
    () =>
      cards.map(card => (
        <Card key={card.uuid} card={card} onRemove={removeCard(card.uuid)} />
      )),
    [cards, removeCard]
  )
  useEffect(addCard, [addCard])

  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">CopyMe</h2>
      <div className="mt-4"></div>
    </section>
  )
}
