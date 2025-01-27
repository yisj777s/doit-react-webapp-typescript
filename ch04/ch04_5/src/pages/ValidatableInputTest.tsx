import {useRef, useCallback} from 'react'
import {Title} from '../components'
import type {ValidatableInputMethods} from '../theme/daisyui'
import {ValidatableInput, Button} from '../theme/daisyui'

export default function ValidatableInputTest() {
  const methodsRef = useRef<ValidatableInputMethods>(null)

  const validateEmail = useCallback(() => {
    if (methodsRef.current) {
      const [valid, valueOrErrorMessage] = methodsRef.current.validate()
      if (valid) alert(`${valueOrErrorMessage}는 유효한 이메일 주소입니다.`)
      else alert(valueOrErrorMessage)
    }
  }, [])

  // prettier-ignore
  return (
    <section className="mt-4">
      <Title>ValidatableInputTest</Title>
      <div className="mt-4">
        <div>
          <ValidatableInput type="email" ref={methodsRef} className="input-primary" />
          <Button onClick={validateEmail}>
            VALIDATE
          </Button>
        </div>
      </div>
    </section>
  )
}
