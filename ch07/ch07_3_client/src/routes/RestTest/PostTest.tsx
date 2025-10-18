import {useState, useCallback} from 'react'
import {Button} from '../../theme/daisyui'
import {post} from '../../server'
import * as D from '../../data'

export default function PostTest() {
  const [data, setData] = useState<object>({})
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  const postTest = useCallback(() => {})
}
