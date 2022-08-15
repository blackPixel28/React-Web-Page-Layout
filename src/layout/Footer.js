import { useState, useEffect } from 'react';
import '../css/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArrowUp from '../components/ArrowUp';
import setCssRootValue from '../components/setCssRootValue';

export default function Footer({ text }) {
    const [arrowOpacity, setArrowOpacity] = useState(0);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            handleActive(document.querySelector('.footer-arrowUp'))
            // setCssArrowOpacity()
            setCssRootValue('--arrowUpOpacity', arrowOpacity, '%')
        })
    })

    const handleActive = (item) => {
        const footerHeight = document.querySelector('footer').offsetHeight;
        const maxScroll = document.body.scrollHeight - window.scrollY - window.innerHeight;
        const opacity = Math.floor(((footerHeight * 100) / maxScroll) - 100);

        if (maxScroll <= (footerHeight * 2)) {
            if (opacity >= 0) setArrowOpacity(opacity);
            else if (opacity > 99) setArrowOpacity(100);
            item.classList.add('active');
            item.classList.remove('inactive');
        }
        else if (maxScroll >= (footerHeight * 2)) {
            item.classList.add('inactive');
            item.classList.remove('active');
        }
    }
    return (
        <footer className="app-footer">
            <div className='footer-text'>
                <p>{text}</p>
                <p>{text}</p>
                <p>{text}</p>
            </div>
            <FontAwesomeIcon className='footer-arrowUp inactive' icon="fa-solid fa-circle-arrow-up" onClick={ArrowUp} />
        </footer>
    )
}