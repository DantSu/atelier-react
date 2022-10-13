import {useCallback} from 'react'

const
  useClickStopPropagation = () => useCallback(e => e.stopPropagation(), [])


export {useClickStopPropagation}