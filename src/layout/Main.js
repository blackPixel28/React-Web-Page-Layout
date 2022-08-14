import '../css/Main.css'
import { Routes, Route } from "react-router-dom";
import { StartPage, NoPage, NavLink, Contact } from '../pages'


export default function Main() {
    return (
        <main className="app-main">
            <Routes>
                <Route
                    exact path="/"
                    element={<StartPage
                        title='Home Page'
                    />}
                />
                <Route
                    path="link1"
                    element={<NavLink
                        title='Link1'
                    />}
                />
                <Route
                    path="link2"
                    element={<NavLink
                        title='Link2'
                    />}
                />
                <Route
                    path="link3"
                    element={<NavLink
                        title='Link3'
                    />}
                />
                <Route
                    path="contact"
                    element={<Contact
                        title='Kontakt'
                    />}
                />
                <Route
                    path="*"
                    element={<NoPage
                        title='Error 404'
                        text='Brak strony'
                    />}
                />
            </Routes>
        </main>
    )
}