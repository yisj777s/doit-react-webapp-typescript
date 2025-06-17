import type {FC} from 'react'
import type {LinkProps as RRLinkProps} from 'react-router-dom'
import {Link as RRLink} from 'react-router-dom'

export type LinkProps = RRLinkProps & {}

export const Link: FC<LinkProps> = ({className: _className, to, ...props}) => {
  const className = [_className].join(' ')
  return <RRLink {...props} to={to} className={className} />
}
