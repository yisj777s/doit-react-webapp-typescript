import type {FormEvent, ChangeEvent} from 'react'
import {useCallback, useState} from 'react'
import {Title} from '../components'
import {Input} from '../theme/daisyui'

export default function BasicForm() {
  const [name, setName] = useState<string>('')
  const [email, setEmail] = useState<string>('')

  const onSubmit = useCallback(
    (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault() // 중요!

      const formData = new FormData()
      formData.append('name', name)
      formData.append('email', email)
      alert(JSON.stringify(Object.fromEntries(formData), null, 2))
    },
    [name, email]
  )

  const onChangeName = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setName(notUsed => e.target.value)
  }, [])
  const onChangeEmail = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setEmail(notUsed => e.target.value)
  }, [])

  //prettier-ignore
  return (
    <section className="mt-4">
      <Title>BasicForm</Title>
      <div className="mt-4">
        <form >
          <div></div>
          <div></div>
          <div></div>
        </form>
      </div>
    </section>
  )
}
