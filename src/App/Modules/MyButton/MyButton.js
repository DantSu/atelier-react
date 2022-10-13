
import {useModal} from "../../../Components/Modal/ModalHooks";
import MyButtonModal from "./MyButtonModal";

function MyButton() {
  const [addModal, rmModal] = useModal()

  return <button onClick={() => {
      const myModal = <MyButtonModal key="myModal" onClose={() => rmModal(myModal)}/>
      addModal(myModal)
    }}>
    Click me !
  </button>

}

export default MyButton