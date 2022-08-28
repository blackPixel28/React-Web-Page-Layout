const GetDate = ({ dateTitle }) => {
    const handleDate = () => {
        const d = new Date();
        const date = d.toISOString().slice(0, 10).split('-');
        return `${date[2]}-${date[1]}-${date[0]}`
    }

    return (
        <span className='topBar-date'>
            {`${dateTitle}${handleDate()}`}
        </span>
    )
}

export default GetDate;