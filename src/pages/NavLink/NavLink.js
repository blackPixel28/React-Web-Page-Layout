import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function NavLink({ title, text }) {
    return (
        <section className="navLink">
            <h1>
                <FontAwesomeIcon icon={'fas-solid  fa-file'} />
                <span className="navLink-title">{title}</span>
            </h1>
            <p>
                {text}
            </p>
        </section>
    )
}

