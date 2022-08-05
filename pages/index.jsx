import styles from '../styles/Home.module.css'
import Tabuleiro from '../components/ex1/Tabuleiro'
import MegaSena from '../components/ex2/MegaSena'

export default function Home() {
 

  return (
    <div className={styles.container}>
    
          <div className={styles.tabu}>
           {/* <Tabuleiro/> */}
           <MegaSena/>
          </div>

    </div>
  )
}
