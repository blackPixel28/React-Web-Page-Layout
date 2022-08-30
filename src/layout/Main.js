import '../css/Main.css'
import { Routes, Route } from "react-router-dom";
import { StartPage, NoPage, NavLink, Contact, loremLong, loremMid, loremDefault } from '../pages'

export default function Main({ noPage, links }) {

    return (
        <main className="app-main">
            <Routes>
                <Route
                    exact path="/"
                    element={<StartPage
                        title='Home Page'
                        text={loremDefault}
                    />}
                />
                <Route
                    path="link1"
                    element={<NavLink
                        title='Link1'
                        text={loremDefault}
                    />}
                />
                <Route
                    path="link2"
                    element={<NavLink
                        title='Link2'
                        text={loremMid}
                    />}
                />
                <Route
                    path="link3"
                    element={<NavLink
                        title='Link3'
                        text={loremLong}
                    />}
                />
                <Route
                    path="contact"
                    element={<Contact
                        title='Kontakt'
                        text={loremDefault}
                    />}
                />
                <Route
                    path="*"
                    element={<NoPage
                        title={noPage.title}
                        text={noPage.text}
                    />}
                />
            </Routes>
        </main>
    )
}