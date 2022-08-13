import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NoPage() {
    return (
        <section className="no-page-404">
            <h1>
                <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" color='#fcad03' fade />
                ERROR 404
            </h1>
            <h3>no page - error 404</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate cumque adipisci pariatur debitis sint optio, exercitationem quisquam ea beatae, soluta id totam eos quam quaerat saepe, iste earum dolore! Numquam.
            </p>
        </section>
    )
}