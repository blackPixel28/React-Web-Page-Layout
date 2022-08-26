import { useEffect } from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowUp from '../components/ArrowUp';

function FooterTextElement({ text }) {
    return (
        <div className='footer-content-text'>{text}</div>
    )
}

function FooterText({ text }) {
    return (
        <div className='footer-content'>
            <FooterTextElement text={text} />
        </div>
    )
}


export default function Footer({ text, copyTitle, publicYear }) {
    const currentYear = new Date().getFullYear();

    useEffect(() => {
        window.addEventListener('scroll', () => {
            handleActive(document.querySelector('.footer-arrowUp'))
        })
    })

    const handleActive = (item) => {
        const element = document.querySelector('header').offsetHeight;
        const scrollY = window.scrollY;

        if (scrollY >= element) {
            item.classList.add('active');
        }
        else if (scrollY < element) {
            item.classList.remove('active');
        }
    }


    return (
        <footer className="app-footer">
            <FooterText text={text} />
            <FontAwesomeIcon className='footer-arrowUp' icon="fa-solid fa-circle-arrow-up" onClick={ArrowUp} />
            <div className='footer-year'>
                {currentYear > publicYear ?
                    <span>
                        {copyTitle + ' '}
                        <FontAwesomeIcon icon="fa-solid fa-copyright" />
                        {` ${publicYear} - ${currentYear}`}
                    </span> :
                    <span>
                        {copyTitle + ' '}
                        <FontAwesomeIcon icon="fa-solid fa-copyright" />
                        {` ${currentYear}`}
                    </span>
                }
            </div>
        </footer>
    )
}