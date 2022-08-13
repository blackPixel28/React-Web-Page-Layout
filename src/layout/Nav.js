import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import '../css/Nav.css';

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
            <li
                key={`list-key:${index}`}
                className="nav-li">
                <Link
                    key={`link-key:${index}`}
                    to={navDB[index].link}
                    className="nav-link">
                    <FontAwesomeIcon icon={navDB[index].icon} />
                    {navDB[index].text}
                </Link>
            </li>
        ))
    )
}