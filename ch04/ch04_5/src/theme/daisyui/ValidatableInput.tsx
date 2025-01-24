import type {ReactInputProps} from './Input'
import {forwardRef, useImperativeHandle, useMemo, useRef} from 'react'

export type ValidatableInputMethods = {
  validate: () => [boolean, string]
}

export const ValidatableInput = forwardRef<ValidatableInputMethods, ReactInputProps>(
  ({className: _className, ...inputProps}, methodsRef) => {
    const className = useMemo(() => ['input', _className].join(' '), [_className])
    const inputRef = useRef<HTMLInputElement>(null)

    useImperativeHandle(methodsRef, () => ({}), [])

    return <input {...inputProps} className={className} />
  }
)
