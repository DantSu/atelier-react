
import {useState, useCallback} from 'react'
import {ModalContext} from './ModalContext'


function ModalProvider ({children}) {
  const
    [modals, setModals] = useState([]),
    addModal = useCallback(modal => setModals(modals => [...modals, modal]), [setModals]),
    rmModal = useCallback(modal => setModals(modals => modals.filter(m => m !== modal)), [setModals])

  return <ModalContext.Provider value={{addModal, rmModal}}>
    {children}
    {modals}
  </ModalContext.Provider>
}

export default ModalProvider