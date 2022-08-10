import { Routes, Route } from "react-router-dom";
import StartPage from '../pages/StartPage';
import PageLink1 from '../pages/PageLink1';

export default function Main() {
    return (
        <Routes>
            <Route path="/" element={<StartPage />} />
            <Route path="link1" element={<PageLink1 />} />
        </Routes>
    )
}