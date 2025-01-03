import {useState, useEffect} from 'react'
import {useEventListener} from './useEventListener'

export const useWindowResize = () => {
  const [widthHeight, setWidthHeight] = useState<number[]>([0, 0])

  useEffect(() => {
    setWidthHeight(notUsed => [window.innerWidth, window.innerHeight])
  }, []) // 컴포넌트가 마운트될 때 창 크기 설정정

  useEventListener(window, 'resize', () => {
    setWidh
  })
}
