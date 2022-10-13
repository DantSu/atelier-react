import {useState, useEffect} from 'react'
import Modal from "../../Components/Modal/Modal";

import styles from './Stopwatch.module.scss'

const
  zeroBefore = num => num < 10 ? '0' + num : num,
  secondToDisplay = second => zeroBefore(Math.floor(second / 60)) +':' + zeroBefore(second % 60)

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
    <p className={styles.time}>{secondToDisplay(seconds)}</p>
    <button onClick={() => setPlay(p => !p)}>{play ? 'Pause' : 'Play'}</button>
  </Modal>
}

export default StopwatchModal
