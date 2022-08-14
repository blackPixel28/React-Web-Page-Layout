import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from "react-router-dom";
import '../css/Nav.css';

export default function Nav({ navData }) {
    return (
        <nav className="app-nav">
            <NavContener navData={navData} />
        </nav>
    )
}

function NavContener({ navData }) {
    return (
        <ul className="nav-ul">
            <NavLinks navData={navData} />
        </ul>
    )
}
function NavLinks({ navData }) {
    return (
        navData.map((item, index) => (
            <li
                key={`list-key:${index}`}
                className="nav-li">

                <Link
                    key={`link-key:${index}`}
                    to={navData[index].link}
                    className="nav-link">
                    <FontAwesomeIcon icon={navData[index].icon} />
                    <p className='nav-text'>
                        {navData[index].text}
                    </p>
                </Link>
            </li>
        ))
    )
}