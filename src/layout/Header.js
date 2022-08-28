import TopBar from './TopBar';
import '../css/Header.css';
import Slideshow from '../components/Slideshow';

export default function Header({ topBarDB, setActiveTheme, themes }) {
    return (
        <header className="app-header">
            <TopBar text={topBarDB.text} dateTitle={topBarDB.dateTitle + ' '} timeTitle={topBarDB.timeTitle + ' '} setActiveTheme={setActiveTheme} themes={themes} />
            <Slideshow />
        </header>
    )
}