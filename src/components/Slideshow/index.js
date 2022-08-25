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
        console.log(`start: ${e.touches[0].clientX}`)
        return setTouchStart(e.touches[0].clientX);
    }
    const handleTouchMove = (index, e) => {
        let direction = 0;
        const eventTouchX = e.touches[0].clientX;

        eventTouchX > touchStart ? direction = 'right' : direction = 'left';

        if (direction === 'right') {
            resetTimeout();
            timeoutRef.current = setTimeout(
                () =>
                    setIndex((prevIndex) =>
                        prevIndex === 0 ? prevIndex = slideData.slide.length - 1 : prevIndex - 1
                    ),
                touchDelay
            );
        }
        else if (direction === 'left') {
            resetTimeout();
            timeoutRef.current = setTimeout(
                () =>
                    setIndex((prevIndex) =>
                        prevIndex === slideData.slide.length - 1 ? 0 : prevIndex + 1
                    ),
                touchDelay
            );
        }
        console.log(direction)
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
                            <h3 className="slide-content-title">{item.title}</h3>
                            <p className="slide-content-text">{item.text}</p>
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