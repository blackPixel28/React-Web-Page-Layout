import Nav from './Nav';
import '../css/Header.css';

export default function Header({ navDB, text }) {
    return (
        <header className="app-header">
            <HeaderTextAndLogo text={text} />
            <Nav navDB={navDB} />
        </header>
    )
}

function HeaderTextAndLogo({ text }) {
    return (
        <div className='header-text-and-logo'>
            <h1>{text}</h1>
        </div>
    )
}