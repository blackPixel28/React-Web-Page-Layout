import '../css/Main.css'
import { Routes, Route } from "react-router-dom";
import { StartPage, NoPage, NavLink, Contact } from '../pages'


export default function Main() {
    return (
        <main className="app-main">
            <Routes>
                <Route exact path="/" element={<StartPage />} />
                <Route path="link1" element={<NavLink />} />
                <Route path="link2" element={<NavLink />} />
                <Route path="link3" element={<NavLink />} />
                <Route path="contact" element={<Contact />} />
                <Route path="*" element={<NoPage />} />
            </Routes>
        </main>
    )
}