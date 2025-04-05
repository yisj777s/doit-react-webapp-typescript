import {useCallback} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import type {AppState} from '../store'
import {Title} from '../components'
import {Button} from '../theme/daisyui'
import * as L from '../store/loading'

export default function LoadingTest() {
  const dispatch = useDispatch()
  const loading = useSelector<AppState, L.State>(({loading}) => loading)

  const doTimedLoading = useCallback(() => {
    dispatch<any>(L.doTimedLoading(1000))
  }, [dispatch])

  return (
    <section className="mt-4">
      <Title>Loading</Title>
      <div className="mt-4">
        <div className="flex justify-center mt-4">
          <Button 
            className="btn-sm btn-primary" 
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