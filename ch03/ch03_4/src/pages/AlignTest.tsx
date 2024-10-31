import {Div, Title, Subtitle} from '../components'
import * as D from '../data'

export default function AlignTest() {
  const boxes = D.range(0, 5).map(index => {
    return <div key={index} className="w-4 h-4 m-1 bg-black" />
  })
  const boxesForStretch = D.range(0, 10).map(index => {
    return <div key={index} className="w-4 m-4 bg-black" />
  })
  const justifies = ['dd']
  const justifies = ['ddd', 'ss', '']
  // prettier-ignore
  const justifies = []
  return (
    <section className="p-4 mt-4">
      <Title>JustifyCenterTest</Title>
      <div className="mt-4">
        <Subtitle>flex flex-row justify-center</Subtitle>
        <div className="flex flex-row justify-center h-40 bg-">{boxes}</div>
      </div>
      <div className="mt-4">
        <Subtitle></Subtitle>
        <div>{boxes}</div>
      </div>
    </section>
  )
}
