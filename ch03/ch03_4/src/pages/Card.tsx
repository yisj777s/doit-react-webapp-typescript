import type {FC} from 'react'
import type {DivProps} from '../components'
import {Div} from '../components'
import * as D from '../data'
import User from './User'

export type CardProps = DivProps & {
  card: D.ICard
}
const Card: FC<CardProps> = ({card, ...props}) => {
  const {writer, image, title, paragraphs, dayMonthYearDate, relativeDate} = card
  return (
    <Div {...props}>
      <div>
        <User user={writer} className="mt-2" />
      </div>
    </Div>
  )
}
export default Card
