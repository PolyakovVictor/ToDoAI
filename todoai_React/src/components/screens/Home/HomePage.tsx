import Navbar from "../global/Navbar/Navbar"
import NavbarButton from "../global/Navbar/Navbar-button/Navbar-button"
import AuthPanel from "./AuthPanel/AuthPanel"
import styles from './HomePage.module.css'

function HomePage() {

    return (
    <div className={styles.body}>
      <Navbar>
        <NavbarButton />
      </Navbar>

      <main className={styles.main}>
        <div className={styles.content}>
            <AuthPanel></AuthPanel>
        </div>
      </main>

    </div>
)
}

export default HomePage
