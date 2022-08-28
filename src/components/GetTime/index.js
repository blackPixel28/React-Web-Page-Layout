import { useState, useEffect } from "react";

const GetTime = ({ timeTxt }) => {
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
        <span className='topBar-time'>
            {`${timeTxt}${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`}
        </span>
    )
}

export default GetTime;