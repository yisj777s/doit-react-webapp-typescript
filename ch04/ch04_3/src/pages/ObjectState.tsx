import type {FormEvent, ChangeEvent} from 'react'
import {useCallback, useState} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

type FormType = {
  name: string
  email: string
}

export default function BasicForm() {
  const [form, setForm] = useState<FormType>({name: '', email: ''})
  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() // 중요!
      alert(JSON.stringify(form, null, 2))
    },
    [form]
  )

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(state => ({...state, name: e.target.value}))
  }, [])
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm(form => ({...form, email: e.target.value}))
  }, [])

  //prettier-ignore
  return (
    <section className="mt-4">
      <Title>BasicForm</Title>
      <div className="flex justify-center mt-4">
        <form onSubmit={onSubmit}>
          <div className="form-control">
            <label className="label" htmlFor="name">
              <span className="label-text">Username</span>
            </label>
            <Input value={form.name} onChange={onChangeName} id="name" type="text"
              placeholder="enter your name" className="input-primary" />
          </div>
          <div className="form-control">
            <label className="label" htmlFor="email">
              <span className="label-text">email</span>
            </label>
            <Input value={form.email} onChange={onChangeEmail} id="email" type="email" 
              placeholder="enter your email" className="input-primary" />
          </div>
          <div className="flex justify-center mt-4">
            <input type="submit" value="SUBMIT"
              className="w-1/2 btn btn-sm btn-primary"/>
            <input type="button" defaultValue="CANCEL" className="w-1/2 ml-4 btn btn-sm"/>
          </div>
        </form>
      </div>
    </section>
  )
}
