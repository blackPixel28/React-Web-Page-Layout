import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from "react";

const GetTime = ({ timeTitle }) => {
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        setInterval(() => {
            handleTime();
        }, 1000);
    })

    const handleTime = () => {
        setHours(new Date().getHours());
        setMinutes(new Date().getMinutes());
        setSeconds(new Date().getSeconds());
    }

    return (
        <div className='topBar-time'>
            <FontAwesomeIcon icon="fa-solid fa-clock" color='rgba(255, 255, 255, 0.3)' />
            {` ${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
        </div>
    )
}

export default GetTime;