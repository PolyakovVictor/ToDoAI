import Header from "./components/Header/Header"
import Product from "./components/Product/Product"
import './App.css'
import fruitsData from './data.json'

function App() {

    return (
    <div className="body">
      <Header></Header>

      <main>
        <h1>Hello React</h1>
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
