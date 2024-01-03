import Navbar from "./components/Navbar/Navbar"
import Product from "./components/Product/Product"
import NavbarButton from "./components/Navbar/Navbar-button/Navbar-button"
import fruitsData from './data.json'
import './App.css'

function App() {

    return (
    <div className="body">
      <Navbar>
        <NavbarButton />
      </Navbar>

      <main>
        <div className="content">
          {fruitsData.fruits.map(fruit => (
            <Product fruit={fruit}></Product>
          ))}
        </div>
      </main>

    </div>
)
}

export default App
