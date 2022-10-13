import {useState, useEffect} from 'react'
import { secondToDisplay } from '../../Commons/Helpers/Time'
import Modal from "../../Commons/Components/Modal/Modal";

import styles from './Stopwatch.module.scss'

function StopwatchModal({onClose}) {
  const
    [play, setPlay] = useState(true),
    [seconds, setSeconds] = useState(0)

  useEffect(
    () => {
      if(!play) {
        return
      }
      const interval = setInterval(() => setSeconds(c => c + 1), 1000)
      return () => clearInterval(interval)
    },
    [setSeconds, play]
  )

  return <Modal onClose={onClose} className={styles.modal}>
    <h1 className={styles.title}>The Stopwatch !</h1>
    <p className={play ? styles.time : styles.timePaused}>{secondToDisplay(seconds)}</p>
    <button onClick={() => setPlay(p => !p)}>{play ? 'Pause' : 'Play'}</button>
  </Modal>
}

export default StopwatchModal
