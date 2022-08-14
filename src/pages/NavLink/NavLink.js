import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export default function NavLink({ title }) {
    return (
        <section className="navLink">
            <h1>
                <FontAwesomeIcon icon={'fas-solid  fa-file'} />
                <span className="navLink-title">{title}</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque adipisci pariatur debitis sint optio, exercitationem quisquam ea beatae, soluta id totam eos quam quaerat saepe, iste earum dolore! Numquam.
            </p>
        </section>
    )
}