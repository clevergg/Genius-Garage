import {Footer} from "../footer/footer.jsx"
import { Header } from '../header/Header.jsx'
import {Main} from '../Main/Main.jsx'
import styles from './home.module.css'



export function Home(){
    return <div className={styles.body}>
        <main>
            <Header/>
            <Main/>
            
        </main>
        <Footer/>
    </div>
}

