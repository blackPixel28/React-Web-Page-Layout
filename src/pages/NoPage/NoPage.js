import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NoPage({ title, text }) {
    return (
        <section className="no-page">
            <h1>
                <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" color='#fcad03' fade />
                {title}
            </h1>
            <h3>{text}</h3>
        </section>
    )
}