import type {FC} from 'react'
import type {ICard} from '../../data'
import {Div, Avatar} from '../../components'
import {Icon} from '../../theme/daisyui'

export type UserCardProps = {
  card: ICard
  onRemove?: () => void
}

const Card: FC<UserCardProps> = ({card, onRemove}) => {
  const {image, writer} = card
  const {avatar, name, jobTitle} = writer

  return (
    <Div>
      <Div src={image} className="relative h-20">
        <Icon
          name="remove"
          className="absolute right-1 top-1 btn-primary btn-xs"
          onClick={onRemove}
        />
      </Div>
      <Div className="flex flex-col p-2">
        <Div minHeight="4"></Div>
      </Div>
    </Div>
  )
}

export default function CardTest() {
  return (
    <section className="mt-4">
      <h2 className="text-5xl font-bold text-center">CopyMe</h2>
      <div className="mt-4"></div>
    </section>
  )
}
