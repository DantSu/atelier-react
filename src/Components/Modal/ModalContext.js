import {createContext} from 'react'

const
  defaultModalContext = {
    addModal: modal => {},
    rmModal: modal => {}
  },
  ModalContext = createContext(defaultModalContext)

export {ModalContext}