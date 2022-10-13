import {useCallback} from 'react'
import {useClickStopPropagation} from "../../Lib/Hooks/Click";

import styles from './Modal.module.scss'

function Modal({onClose, className, children}) {
  const
    onClick = useCallback(() => typeof onClose === 'function' && onClose(), [onClose]),
    onClickStopPropagation = useClickStopPropagation()

  return <div className={styles.background} onClick={onClick}>
    <div className={[className, styles.container].join(' ')} onClick={onClickStopPropagation}>
      {children}
    </div>
  </div>
}

export default Modal