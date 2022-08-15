import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowUp from '../components/ArrowUp'

export default function Footer({ text }) {
    return (
        <footer className="app-footer">
            <div className='footer-text'>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
            </div>
            <FontAwesomeIcon className='footer-arrowUp' icon="fa-solid fa-circle-arrow-up" onClick={ArrowUp} />
        </footer>
    )
}