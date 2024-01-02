import logo from '/vite.svg'
import './Header.css'

const now = new Date()

export default function Header() {
    return (
        <header>
            <div className='header-logo'>
                <img src={logo} alt="test logo" />
            </div>
          {/* <h3>Result University</h3> */}
            <div className='header-label'>
                <span>Here will be time {now.toLocaleTimeString()}</span>
            </div>
        </header>
    )
}