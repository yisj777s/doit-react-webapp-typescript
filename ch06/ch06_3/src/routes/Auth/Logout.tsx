import {useCallback} from 'react'
import {useNavigate} from 'react-router-dom'
import {Modal, ModalContent, ModalAction} from '../../theme/daisyui'
import {useToggle} from '../../hooks'
import {useAuth} from '../../contexts'
import {Button} from '../../theme/daisyui'

export default function Logout() {
  const [open, toggleOpen] = useToggle(true)

  const navigate = useNavigate()
  const {logout} = useAuth()
  const onAccept = useCallback(() => {
    logout(() => {
      toggleOpen() // 대화 상자 닫기
      navigate('/') // 홈 페이지로 이동
    })
  }, [navigate, toggleOpen, logout])
  const onCancel = useCallback(() => {
    toggleOpen() // 대화 상자 닫기
    navigate(-1) // 이전 페이지로 돌아감
  }, [navigate, toggleOpen])

  return (
    <Modal open={open}>
      <ModalContent
        closeIconClassName="btn-primary btn-outline"
        onCloseIconClicked={onCancel}>
        <p className="text-xl text-center">Are you sure you want to log out?</p>
        <ModalAction>
          <Button className="btn-primary btn-sm" onClick={onAccept}>
            LOGOUT
          </Button>
          <Button className="btn-secondary btn-sm" onClick={onCancel}>
            CANCEL
          </Button>
        </ModalAction>
      </ModalContent>
    </Modal>
  )
}
