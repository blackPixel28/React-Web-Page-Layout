import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function StartPage({ title }) {
    return (
        <section className="start-page">
            <h1>
                <FontAwesomeIcon icon={'fas-solid fa-home'} />
                {title}
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque adipisci pariatur debitis sint optio, exercitationem quisquam ea beatae, soluta id totam eos quam quaerat saepe, iste earum dolore! Numquam.
            </p>
        </section>
    )
}