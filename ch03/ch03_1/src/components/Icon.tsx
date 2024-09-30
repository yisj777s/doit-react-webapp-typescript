import type {FC, CSSProperties} from 'react'

export type IconProps = {
  name: string
  style?: CSSProperties
}

export const Icon: FC<IconProps> = ({name, ...props}) => {
  return (
    <span {...props} className="material-icons">
      {name}
    </span>
  )
}
