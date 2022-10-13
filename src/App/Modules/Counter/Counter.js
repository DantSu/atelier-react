import {useState, useCallback} from 'react'

function Counter() {
  const
    [count, setCount] = useState(0),
    onClick = useCallback(() => setCount(c => c + 1), [setCount])

  return <div>
    <p>{count}</p>
    <button onClick={onClick}>+1</button>
  </div>
}

export default Counter