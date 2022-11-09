import {useCallback, useRef} from 'react'
import {useModal} from '../../Commons/Components/Modal/ModalHooks'
import StopwatchModal from './StopwatchModal'
import styles from "./Stopwatch.module.scss";

function StopwatchStartButton() {
    const
        [addModal, rmModal] = useModal(),
        inputRef = useRef(null),
        onCLick = useCallback(
            () => {
                const myModal = <StopwatchModal key="stopwatch-modal"
                                                startValue={inputRef.current.value}
                                                onClose={() => rmModal(myModal)}/>
                addModal(myModal)
            },
            [rmModal, addModal, inputRef]
        )

    return <div className={styles.container}>
        <input className={styles.input}
               type="number"
               step="1"
               ref={inputRef}/>
        <button onClick={onCLick}>Start Stopwatch !
        </button>
    </div>
}

export default StopwatchStartButton
