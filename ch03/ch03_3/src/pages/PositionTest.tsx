import {Div, Title, Icon} from '../components'
import * as D from '../data'

const src = D.randomImage(800, 500)
//prettier-ignore
export default function PositionTest() {
  const icons = ['home', 'search', 'settings', 'favorite'].map(name => (
    <Icon key={name} name={name} className="mr-2" />
  ))
  return (
    <Div>
      <Title>PositionTest</Title>
      <Div className="relative border-2 border-gray-500"
        src={src} height="10rem">
        <Div className="absolute p-2 text-white bg-red-500">{icons}</Div>
        <Div className="absolute p-2 text-white bg-blue-500">{icons}</Div>
        <Div className="absolute">{icons}</Div>
        <Div className="absolute">{icons}</Div>
      </Div>
    </Div>
  )
}
