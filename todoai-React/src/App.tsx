import Navbar from "./components/Navbar/Navbar"
import Product from "./components/Product/Product"
import NavbarButton from "./components/Navbar/Navbar-button/Navbar-button"
import fruitsData from './data.json'
import styles from './App.module.css'
import Sidebar from "./components/Sidebar/Sidebar"

function App() {

    return (
    <div className={styles.body}>
      <Navbar>
        <NavbarButton />
      </Navbar>

      <main className={styles.main}>
        <Sidebar></Sidebar>
        <div className={styles.content}>
          {fruitsData.fruits.map(fruit => (
            <Product key={fruit.name} fruit={fruit}></Product>
            ))}
        </div>
      </main>

    </div>
)
}

export default App
