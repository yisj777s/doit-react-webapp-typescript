import GetTest from './GetTest'
import PostTest from './PostTest'
import PutTest from './PutTest'
import DeleteTest from './DeleteTest'

export default function RestTest() {
  return (
    <div>
      <p className=""></p>
      <DeleteTest />
      <PutTest />
      <PostTest />
      <GetTest />
    </div>
  )
}
