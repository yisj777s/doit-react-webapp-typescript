import {useCallback} from 'react'
import {Title} from '../../components'
import CreateListForm from './CreateListForm'

export default function Board() {
  const onCreateList = useCallback((uuid: string, title: string) => {
    console.log('onCreateList', uuid, title)
  }, [])
  return (
    <section className="mt-4">
      <Title>Board</Title>
      <div className="mt-4">
        <CreateListForm onCreateList={onCreateList} />
      </div>
    </section>
  )
}
