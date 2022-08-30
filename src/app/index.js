import { useState, useEffect, createContext, useContext } from 'react';
import '../components/FontAwesomeIcon';
import db from '../db/layout.json';
import './css/App.css'
import { Header, Main, Footer, Nav } from '../layout';
import SetCssRootValue from '../components/SetCssRootValue';
import themes from './Theme';

const ThemeContext = createContext(themes.light);

export default function App() {
  const theme = useContext(ThemeContext);
  const [stick, setStick] = useState(false);
  const [activeTheme, setActiveTheme] = useState(theme);

  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.addEventListener('scroll', () => {
      window.scrollY >= headerHeight ?
        setStick(true) :
        setStick(false);
    })

    handleChangeTheme()
    handleStick(stick);
    // handleReadCooke() === true ? setActiveTheme(themes.dark) : setActiveTheme(themes.light)

    return () => {
      // document.cookie = `themeColor = dark`;
    }
  })

  const handleChangeTheme = () => {
    const keys = Object.keys(activeTheme);
    const values = Object.values(activeTheme);

    keys.map((key, index) => (
      SetCssRootValue(`--${key}`, values[index])
    ))
  }

  const handleStick = () => {
    const nav = document.querySelector('nav');
    return stick === true ? nav.classList.add('stick') : nav.classList.remove('stick');
  }

  return (
    <ThemeContext.Provider value={activeTheme}>
      <div className="app">
        <Header headerDB={db.Header} topBarDB={db.TopBar} setActiveTheme={setActiveTheme} themes={themes} />
        < Nav navData={db.Links.nav} />
        <Main data={db} />
        <Footer text={db.Footer.text} copyTitle={db.Footer.copyTitle} publicYear={db.Footer.publicYear} />
      </div >
    </ThemeContext.Provider>
  )
}