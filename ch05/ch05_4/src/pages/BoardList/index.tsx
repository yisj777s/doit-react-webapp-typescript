import type {FC} from 'react'
import type {List} from '../../store/commonTypes'
import {Icon} from '../../theme/daisyui'

export type BoardListProps = {
  list: List
  onRemoveList?: () => void
}
const BoardList: FC<BoardListProps> = ({list, onRemoveList, ...props}) => {
  return (
    <div {...props} className="p-2 m-2 border border-gray-300 rounded-lg">
      <div className="flex justify-between mb-2">
        <p className="w-32 text-sm font-bold uderline line-clamp-1">{list.title}</p>
        <div className="flex justify-between ml-2">
          <Icon name="remove" className="btn-error btn-xs" onClick={onRemoveList} />
        </div>
      </div>
    </div>
  )
}
export default BoardList
