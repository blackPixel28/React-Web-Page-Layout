import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Contact({ title }) {
    return (
        <section className="contact">
            <h1>
                <FontAwesomeIcon icon={'fas-solid fa-envelope'} />
                <span className="contact-title">{title}</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque adipisci pariatur debitis sint optio, exercitationem quisquam ea beatae, soluta id totam eos quam quaerat saepe, iste earum dolore! Numquam.
            </p>
        </section>
    )
}