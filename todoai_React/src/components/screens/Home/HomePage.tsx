import Navbar from "../global/Navbar/Navbar"
import Sidebar from "../global/Sidebar/Sidebar"
import styles from './HomePage.module.css'

function HomePage() {
    return (
      <div className={styles.body}>
        <Navbar/>

        <main className={styles.main}>
          <Sidebar/>
          <div className={styles.content}>
          </div>
        </main>

      </div>
  )
}

export default HomePage
