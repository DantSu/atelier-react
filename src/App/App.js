import './App.scss'
import styles from './App.module.scss'
import Counter from "./Modules/Counter/Counter";
import MyButton from "./Modules/MyButton/MyButton";
import ModalProvider from "../Components/Modal/ModalProvider";


function App() {
  return (
    <ModalProvider>
      <div className={styles.appContainer}>
        <Counter/>
        <MyButton/>
      </div>
    </ModalProvider>
  );
}

export default App;
