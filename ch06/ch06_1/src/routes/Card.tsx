import type {AppState} from '../store'
import type {Card as CardType} from '../store/commonTypes'
import * as CE from '../store/cardEntities'

import {useCallback} from 'react'
import {useLocation, useParams, useNavigate, useSearchParams} from 'react-router-dom'
import {Button} from '../theme/daisyui'

export default function Card() {
  const location = useLocation()
  const params = useParams()
  const navigate = useNavigate()
  const [search] = useSearchParams()
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])
  return (
    <div>
      <p>location: {JSON.stringify(location, null, 2)}</p>
      <p>params: {JSON.stringify(params, null, 2)}</p>
      <p>cardid: {params['cardid']}</p>
      <p>
        from: {search.get('from')}, to: {search.get('to')}
      </p>
      <Button className="mt-4 btn-primary btn-xs" onClick={goBack}>
        GO BACK
      </Button>
    </div>
  )
}
