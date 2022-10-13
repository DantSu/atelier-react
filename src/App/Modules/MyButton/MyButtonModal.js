import {useState, useEffect} from 'react'
import Modal from "../../../Components/Modal/Modal";

const data = [
  {id: 1, name: 'my name 1'},
  {id: 2, name: 'my name 2'},
  {id: 3, name: 'my name 3'},
  {id: 4, name: 'my name 4'},
  {id: 5, name: 'my name 5'},
  {id: 6, name: 'my name 6'},
  {id: 7, name: 'my name 7'},
  {id: 8, name: 'my name 8'},
  {id: 9, name: 'my name 9'},
]

function MyButtonModal({onClose}) {
  const
    [play, setPlay] = useState(false),
    [count, setCount] = useState(0)

  useEffect(
    () => {
      if(!play) {
        return
      }
      const interval = setInterval(() => setCount(c => c + 1), 1000)
      return () => clearInterval(interval)
    },
    [setCount, play]
  )

  return <Modal onClose={onClose}>
    <h1>Count: {count}</h1>
    <button onClick={() => setPlay(p => !p)}>{play ? 'Pause' : 'Play'}</button>
  </Modal>
}

export default MyButtonModal