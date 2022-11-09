import Counter from "./Modules/Counter/Counter";
import StopwatchStartButton from "./Modules/Stopwatch/StopwatchStartButton";
import ModalProvider from "./Commons/Components/Modal/ModalProvider";

import './App.scss'
import styles from './App.module.scss'

function App() {
    return (
        <ModalProvider>
            <main className={styles.appContainer}>
                <Counter/>
                <StopwatchStartButton/>
            </main>
        </ModalProvider>
    );
}

export default App;
