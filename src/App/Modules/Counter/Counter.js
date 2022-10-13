import {useState, useCallback} from 'react'

import styles from './Counter.module.scss'

function Counter() {
  const
    [count, setCount] = useState(0),
    onClickLess = useCallback(() => setCount(c => c - 1), [setCount]),
    onClickPlus = useCallback(() => setCount(c => c + 1), [setCount])

  return <div className={styles.container}>
    <p className={styles.count}>{count}</p>
    <div className={styles.buttons}>
      <button onClick={onClickLess}>-1</button>
      <button onClick={onClickPlus}>+1</button>
    </div>
  </div>
}

export default Counter
