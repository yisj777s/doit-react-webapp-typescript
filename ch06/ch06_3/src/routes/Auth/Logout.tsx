import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {Modal, ModalContent, ModalAction} from '../../theme/daisyui'
import {useToggle} from '../../hooks'
import {useAuth} from '../../contexts'
import {Button} from '../../theme/daisyui'

export default function Logout() {
  const [open, toggleOepn] = useToggle(true)

  const navigate = useNavigate()
  const {logout} = useAuth()
  const onAccept = useCallback(() => {
    logout(() => {
      toggleOepn() // 대화 상자 닫기
      navigate('/') // 홈 페이지로 이동
    })
  })
}
