import type {FC} from 'react'
import type {DivProps} from '../components'
import {Div, Icon} from '../components'
import * as D from '../data'
import User from './User'

export type CardProps = DivProps & {
  card: D.ICard
}
const Card: FC<CardProps> = ({card, ...props}) => {
  console.log(card)
  const {writer, image, title, paragraphs, dayMonthYearDate, relativeDate} = card
  return (
    <Div {...props}>
      <div>
        <Div src={image} className="h-60" />
        <User user={writer} className="mt-2" />
      </div>
    </Div>
  )
}
export default Card
