import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect, useRef } from "react";
import './css/index.css';
import slideData from './data';

const delay = slideData.delay;
const touchDelay = 100;


export default function Slideshow() {
    const [index, setIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    const handleTouchStart = (e) => {
        return setTouchStart(e.touches[0].clientX);
    }
    const handleTouchMove = (index, e) => {
        let direction = 0;
        const eventTouchX = e.touches[0].clientX;

        eventTouchX > touchStart ? direction = 'right' : direction = 'left';

        if (direction === 'right') {
            handleLeft(touchDelay)
        }
        else if (direction === 'left') {
            handleRight(touchDelay)
        }
    }


    const handleLeft = (delay) => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === 0 ? prevIndex = slideData.slide.length - 1 : prevIndex - 1
                ),
            delay
        )
    }

    const handleRight = (delay) => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slideData.slide.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        )
    }


    const handleArrow = (direction) => {
        if (direction === 'left') handleLeft(0);
        else if (direction === 'right') handleRight(0);
    }


    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === slideData.slide.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className="slideshow">
            <div className="slideshow-Arrow Left" onClick={() => handleArrow('left')} >
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-left" onClick={() => handleArrow('left')} />
            </div>
            <div className="slideshow-Arrow Right" onClick={() => handleArrow('right')} >
                <FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" onClick={() => handleArrow('right')} />
            </div>
            <div
                className="slideshowSlider"
                style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
            >
                {slideData.slide.map((item, index) => (
                    <div
                        key={index}
                        className="slide"
                        style={{
                            backgroundImage: `url("${item.img}")`,
                            backgroundColor: item.color,
                        }}
                        onTouchStart={handleTouchStart}
                        onTouchMove={(e) => handleTouchMove(index, e)}
                    >
                        <div className="slide-content">
                            <h3 className="slide-content-title">
                                {item.title}
                            </h3>
                            <p className="slide-content-text">
                                <span>
                                    {item.text}
                                </span>
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="slideshowDots">
                {slideData.slide.map((_, idx) => (
                    <div
                        key={idx}
                        className={`slideshowDot${index === idx ? " active" : ""}`}
                        onClick={() => {
                            setIndex(idx);
                        }}
                    ></div>
                ))}
            </div>
        </div >
    );
}