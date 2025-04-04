import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '../store'
import {Title} from '../components'
import {Button} from '../theme/daisyui'
import * as D from '../data'
import * as E from '../store/errorMessage'

export default function ErrorMessageTest() {
  const dispatch = useDispatch()
  const errorMessage = useSelector<AppState, E.State>(({errorMessage}) => errorMessage)

  const generateErrorMessage = useCallback(() => {
    dispatch<any>(E.generateErrorMessage(D.randomSentence()))
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>Loading</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button 
            className="btn-sm btn-soft btn-secondary" 
            onClick={doTimedLoading} 
            disabled={loading}>
            DO TIMED LOADING
          </Button>
        </div>
        {loading && (
          <div className="flex items-center justify-center">
            <Button className="btn-circle loading"></Button>
          </div>
        )}
      </div>
    </section>
  )
}