import type {ChangeEvent} from 'react'
import {useState, useCallback} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useAuth} from '../../contexts'
import * as D from '../../data'

type SignUpFormType = Record<'email' | 'password' | 'confirmPassword', string>
const initialFormState = {email: D.randomEmail(), password: '1', confirmPassword: '1'}

export default function SignUp() {
  const [{email, password, confirmPassword}, setForm] =
    useState<SignUpFormType>(initialFormState)
  const changed = useCallback((key: string) => (e: ChangeEvent<HTMLInputElement>) => {
    setForm(obj => ({...obj, [key]: e.target.value}))
  })
}
