import type {FC} from 'react'
import type {ButtonProps} from './Button'
import type {IconProps as CIconProps} from '../../components'
import {Button} from './Button'
import {Icon as CIcon} from '../../components'

export type IconProps = ButtonProps &
  CIconProps & {
    iconClassName?: string
  }
