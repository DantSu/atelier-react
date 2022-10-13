import { zeroBefore } from './Number'

const
  secondToDisplay = second => zeroBefore(Math.floor(second / 60)) + ':' + zeroBefore(second % 60)

export { secondToDisplay }
