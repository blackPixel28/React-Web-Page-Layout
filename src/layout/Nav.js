import { Link } from "react-router-dom";

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
            <Link key={`link-key:${index}`} to={navDB[index].link}>{navDB[index].text}</Link>
        ))
    )
}