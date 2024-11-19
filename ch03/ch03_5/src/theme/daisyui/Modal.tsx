import type {FC} from 'react'
import type {ReactDivProps} from '../../components'
import {Div} from '../../components'
import {Icon} from './Icon'

export type ModalProps = ReactDivProps & {
  open?: boolean
}
export const Modal: FC<ModalProps> = ({open, className: _className, ...props}) => {
  const className = ['modal', open ? 'modal-open' : '', _className].join(' ')
  return <div {...props} className={className} />
}

export type ModalContentProps = ReactDivProps & {
  onCloseIconClicked?: () => void
  closeIconClassName?: string
}
export const ModalContent: FC<ModalContentProps> = ({
  onCloseIconClicked,
  closeIconClassName: _closeIconClassName,
  className: _className,
  children,
  ...props
}) => {
  const showCloseIcon = onCloseIconClicked ? true : false
  const className = ['modal-box', showCloseIcon && 'relative', _className].join(' ')
  if
}
