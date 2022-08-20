import '../css/TopBar.css';
import { useState, useEffect } from 'react';
export default function TopBar({ text, dataTxt, timeTxt }) {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(() => {
            handleTime();
        }, 1000);
    })

    const handleDate = () => {
        const d = new Date();
        const date = d.toISOString().slice(0, 10).split('-');
        return `${date[2]}-${date[1]}-${date[0]}`
    }

    const handleTime = () => {
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
        setSeconds(new Date().getSeconds());
    }

    return (
        <section className="app-topBar">
            <p className='topBar-text'>
                <span>
                    {`${text}`}
                </span>
            </p>
            <p className='topBar-date-time'>
                <span className='topBar-date'>
                    {`${dataTxt}${handleDate()}`}
                </span>
                <span className='topBar-time'>
                    {`${timeTxt}${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
                </span>
            </p>
        </section>
    )
}