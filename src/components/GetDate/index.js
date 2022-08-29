import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const GetDate = ({ dateTitle }) => {
    const handleDate = () => {
        const d = new Date();
        const date = d.toISOString().slice(0, 10).split('-');
        return `${date[2]}-${date[1]}-${date[0]}`
    }

    return (
        <div className='topBar-date'>
            <FontAwesomeIcon icon="fa-solid fa-calendar-day" color='rgba(255, 255, 255, 0.3)' />
            {` ${handleDate()}`}
        </div>
    )
}

export default GetDate;