import '../css/TopBar.css';
import GetDate from '../components/GetDate';
import GetTime from '../components/GetTime';
import ThemeSwitch from '../components/ThemeSwitch';

export default function TopBar({ text, dateTitle, timeTitle, setActiveTheme, themes }) {
    return (
        <section className="app-topBar">
            <TopBarText text={text} />
            <ThemeSwitch setActiveTheme={setActiveTheme} themes={themes} />
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
            <div className='date-time-wrap'>
                <GetDate dateTitle={dateTitle} />
                <GetTime timeTitle={timeTitle} />
            </div>
        </div>
    )
}