import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({ title, text }) {
    return (
        <section className="contact">
            <h1>
                <FontAwesomeIcon icon={'fas-solid fa-envelope'} />
                <span className="contact-title">{title}</span>
            </h1>
            <p>
                {text}
            </p>
        </section>
    )
}