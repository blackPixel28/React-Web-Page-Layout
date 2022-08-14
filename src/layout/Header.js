import Nav from './Nav';
import '../css/Header.css';

export default function Header({ navData, text }) {
    return (
        <header className="app-header">
            <HeaderTextAndLogo text={text} />
            <Nav navData={navData} />
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