import Nav from './Nav';
import '../css/Header.css';

export default function Header({ navDB }) {
    return (
        <header className="app-header">
            <h1>witaj; header</h1>
            <Nav navDB={navDB} />
        </header>
    )
}