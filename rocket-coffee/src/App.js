import { BrowserRouter, Link } from 'react-router-dom'
import './Mock.server'
import Routes from './Routes'

export const Navigation = ({ onChangeNavigation }) => {
    return (
        <nav>
            <ul>
                <li>
                    <Link to="home">Home</Link>
                </li>
                <li>
                    <Link to="about">About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default function App() {
    return (
        <Routes/>
    )
}