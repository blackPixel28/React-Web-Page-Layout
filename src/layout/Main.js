import { Routes, Route } from "react-router-dom";
import '../css/Main.css'
import StartPage from '../pages/StartPage';
import PageLink from '../pages/PageLink';

export default function Main() {
    return (
        <main className="app-main">
            <Routes>
                <Route path="/" element={<StartPage />} />
                <Route path="link1" element={<PageLink />} />
                <Route path="link2" element={<PageLink />} />
                <Route path="link3" element={<PageLink />} />
                <Route path="link4" element={<PageLink />} />
            </Routes>
        </main>
    )
}