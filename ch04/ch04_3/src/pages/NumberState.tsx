import {useState, useCallback} from 'react'
import {Title} from '../components'
import {Icon} from '../theme/daisyui'

export default function NumberState() {
  const [count, setCount] = useState<number>(0)

  const increment = useCallback(() => {
    setCount(count => count + 1)
  }, [])
  const decrement = useCallback(() => {
    setCount(count => count - 1)
  }, [])

  return (
    <section className="mt-4 mb-8">
      <Title>NumberState</Title>
      <div className="mt-4">
        <div>
          <Icon />
        </div>
      </div>
    </section>
  )
}
