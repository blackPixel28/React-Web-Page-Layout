import Nav from './Nav';
import '../css/Header.css';

export default function Header({ navDB }) {
    return (
        <header className="app-header">
            <HeaderTextAndLogo />
            <Nav navDB={navDB} />
        </header>
    )
}

function HeaderTextAndLogo() {
    return (
        <div className='header-text-and-logo'>
            <h1>witaj; header</h1>
        </div>
    )
}