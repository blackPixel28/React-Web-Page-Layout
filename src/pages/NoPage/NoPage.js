import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function NoPage({ title, text }) {

    const handleBackPage = () => {
        return window.history.back();
    }

    return (
        <section className="no-page">
            <h1>
                <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" color='#fcad03' />
                {' ' + title + ' '}
                <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" color='#fcad03' />
            </h1>
            <div>
                <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" color='#fcad03' fade className='trinagle' />
                <p className='no-page-text'>
                    {text}
                </p>
                <button className='backBtn' onClick={handleBackPage}>WSTECZ</button>
            </div>
        </section>
    )
}