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
  const icons = ['home', 'search', 'settings', 'favorite'].map(name => (
    <Icon key={name} name={name} className="mr-20 text-3xl" />
  ))
  return (
    <Div {...props}>
      <div className="flex flex-col">
        <Div src={image} className="h-60" />
        <User user={writer} className="mt-2" />
        <Div>{icons}</Div>
      </div>
    </Div>
  )
}
export default Card
