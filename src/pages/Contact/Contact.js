import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({ title, text }) {
    return (
        <section className="contact">
            <h1 className='page-title'>
                <FontAwesomeIcon icon={'fas-solid fa-envelope'} />
                <span className="contact-title">{title}</span>
            </h1>
            <p className='page-text'>
                {text}
            </p>
        </section>
    )
}