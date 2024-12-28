import {FC, DetailedHTMLProps, InputHTMLAttributes} from 'react'

export type ReactInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>
export type InputProps = ReactInputProps & {}

export const Input: FC<InputProps> = ({className: _className, ...inputProps}) => {
  const className = ['input', _className].join(' ')
  return <input {...inputProps} className={className} />
}
