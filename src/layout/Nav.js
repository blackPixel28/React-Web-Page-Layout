export default function Nav({ navDB }) {
    return (
        <nav className="app-nav">
            <NavContener navDB={navDB} />
        </nav>
    )
}

function NavContener({ navDB }) {
    return (
        <ul className="nav-ul">
            <NavLinks navDB={navDB} />
        </ul>
    )
}
function NavLinks({ navDB }) {
    return (
        navDB.map((item, index) => (
            <li key={`listItem:${index}`}><a key={`link-key:${index}`} href={navDB[index].link}>{navDB[index].text}</a></li>
        ))
    )
}