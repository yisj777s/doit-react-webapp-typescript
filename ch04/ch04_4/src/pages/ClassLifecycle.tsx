import {Component} from 'react'
import {Title} from '../components'

export default class ClassLifecycle extends Component {
  render() {
    const today = new Date() // 컴포넌트의 상태로 만들어야 함
    return (
      <section className="mt-4">
        <Title>ClassLifecycle</Title>
        <div className="flex flex-col items-center mt-4">
          <p className="font-mono text-3xl">{today.toLocaleTimeString()}</p>
          <p className="font-mono text-3xl">{today.toLocaleDateString()}</p>
        </div>
      </section>
    )
  }
}
