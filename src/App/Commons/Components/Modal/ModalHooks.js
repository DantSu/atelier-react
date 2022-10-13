import {useContext} from 'react'
import {ModalContext} from './ModalContext'

const
  useModal = () => {
    const {addModal, rmModal} = useContext(ModalContext)
    return [addModal, rmModal]
  }


export {useModal}