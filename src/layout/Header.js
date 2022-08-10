import Nav from './Nav';

export default function Header({ navDB }) {
    return (
        <header className="app-header">
            <h1>witaj; header</h1>
            <Nav navDB={navDB} />
        </header>
    )
}