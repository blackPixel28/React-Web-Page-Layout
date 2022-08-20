import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function StartPage({ title, text }) {
    return (
        <section className="start-page">
            <h1>
                <FontAwesomeIcon icon={'fas-solid fa-home'} />
                {title}
            </h1>
            <p>
                {text}
            </p>
        </section>
    )
}