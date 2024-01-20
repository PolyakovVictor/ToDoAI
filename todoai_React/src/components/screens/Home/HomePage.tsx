import Navbar from "../global/Navbar/Navbar"
import styles from './HomePage.module.css'

function HomePage() {
    return (
      <div className={styles.body}>
        <Navbar/>

        <main className={styles.main}>
          <div className={styles.content}>
          </div>
        </main>

      </div>
  )
}

export default HomePage
