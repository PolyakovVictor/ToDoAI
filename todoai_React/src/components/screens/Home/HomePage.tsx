import Navbar from "../global/Navbar/Navbar"
import NavbarButton from "../global/Navbar/Navbar-button/Navbar-button"
import styles from './HomePage.module.css'

function HomePage() {

    return (
    <div className={styles.body}>
      <Navbar>
        <NavbarButton />
      </Navbar>

      <main className={styles.main}>
        <div>
            asd
        </div>
      </main>

    </div>
)
}

export default HomePage
