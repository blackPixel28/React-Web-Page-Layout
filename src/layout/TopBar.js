import '../css/TopBar.css';
import GetDate from '../components/GetDate';
import GetTime from '../components/GetTime';
import ThemeSwitch from '../components/ThemeSwitch';

export default function TopBar({ text, dateTitle, timeTitle }) {

    return (
        <section className="app-topBar">
            <TopBarText text={text} />
            <ThemeSwitch />
            <TopBarDataTime dateTitle={dateTitle} timeTitle={timeTitle} />
        </section>
    )
}

const TopBarText = ({ text }) => {
    return (
        <div className='topBar-text'>
            <p>
                {`${text}`}
            </p>
        </div>
    )
}
const TopBarDataTime = ({ dateTitle, timeTitle }) => {
    return (
        <div className='topBar-date-time'>
            <GetDate dateTitle={dateTitle} />
            <GetTime timeTitle={timeTitle} />
        </div>
    )
}