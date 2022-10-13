import { zeroBefore } from './Number'

const
  secondsToDisplay = second => zeroBefore(Math.floor(second / 60)) + ':' + zeroBefore(second % 60)

export { secondsToDisplay }
