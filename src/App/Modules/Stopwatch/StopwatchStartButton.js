import { useCallback } from 'react'
import { useModal } from '../../Components/Modal/ModalHooks'
import StopwatchModal from './StopwatchModal'

function StopwatchStartButton () {
  const
    [addModal, rmModal] = useModal(),
    onCLick = useCallback(
      () => {
        const myModal = <StopwatchModal key="myModal" onClose={() => rmModal(myModal)}/>
        addModal(myModal)
      },
      [rmModal, addModal]
    )

  return <button onClick={onCLick}>Start Stopwatch !</button>
}

export default StopwatchStartButton
