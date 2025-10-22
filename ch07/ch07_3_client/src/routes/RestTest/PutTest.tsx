import {useState, useCallback} from 'react'
import {put} from '../../server'
import * as D from '../../data'
import {Button} from '../../theme/daisyui'

type Body = Record<'id' | string, any>
type Data = {
  ok: boolean
  body?: Body
  errorMessage?: string
}
export default function PutTest() {
  const [data, setData] = useState<Data | null>(null)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const putTest = useCallback(() => {
    put('/test/1234', D.makeRandomCard())
      .then(res => res.json())
      .then(data => setData(data))
      .catch(error => setErrorMessage(error.message))
  }, [])

  return (
    <div>
      <div className="mb-4">
        <div></div>
      </div>
      <div className="mt-4 text-center"></div>
    </div>
  )
}
