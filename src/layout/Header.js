import TopBar from './TopBar';
import '../css/Header.css';
import Slideshow from '../components/Slideshow';

export default function Header({ topBarDB, headerDB }) {
    return (
        <header className="app-header">
            <TopBar text={topBarDB.text} dataTxt={topBarDB.dateTxt + ' '} timeTxt={topBarDB.timeTxt + ' '} />
            <Slideshow />
        </header>
    )
}