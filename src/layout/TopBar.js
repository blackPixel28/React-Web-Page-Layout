import '../css/TopBar.css';
import GetDate from '../components/GetDate';
import GetTime from '../components/GetTime';
import ThemeSwitch from '../components/ThemeSwitch';

export default function TopBar({ text, dataTxt, timeTxt }) {

    return (
        <section className="app-topBar">
            <TopBarText text={text} />
            <ThemeSwitch />
            <TopBarDataTime dataTxt={dataTxt} timeTxt={timeTxt} />
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
const TopBarDataTime = ({ dataTxt, timeTxt }) => {
    return (
        <div className='topBar-date-time'>
            <GetDate dataTxt={dataTxt} />
            <GetTime timeTxt={timeTxt} />
        </div>
    )
}