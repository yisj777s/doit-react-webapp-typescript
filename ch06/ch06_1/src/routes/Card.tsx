import {useCallback} from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import {Button} from '../theme/daisyui'

export default function Card() {
  const location = useLocation()

  const navigate = useNavigate()
  const goBack = useCallback(() => {
    navigate(-1)
  }, [navigate])
  return (
    <div>
      <p>location: {JSON.stringify(location, null, 2)}</p>
      <Button className="mt-4 btn-primary btn-xs" onClick={goBack}>
        GO BACK
      </Button>
    </div>
  )
}
