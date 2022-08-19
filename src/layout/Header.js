import TopBar from './TopBar';
import Nav from './Nav';
import '../css/Header.css';
import { Link } from 'react-router-dom'

export default function Header({ navData, text }) {
    return (
        <header className="app-header">
            <TopBar text="Top Bar" />
            <HeaderTextAndLogo text={text} />
            <Nav navData={navData} />
        </header>
    )
}

function HeaderTextAndLogo({ text }) {
    return (
        <div className='header-text-and-logo'>
            <Link
                key='header-link-to-home'
                to='/'
                className='header-text-link'
            >
                <h1 className='h1-link'>
                    {text}
                </h1>
            </Link>

        </div>
    )
}