import TopBar from './TopBar';
import '../css/Header.css';
import Slideshow from '../components/Slideshow';

export default function Header({ topBarDB }) {
    return (
        <header className="app-header">
            <TopBar text={topBarDB.text} dateTitle={topBarDB.dateTitle + ' '} timeTitle={topBarDB.timeTitle + ' '} />
            <Slideshow />
        </header>
    )
}