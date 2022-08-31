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
  // const [db, dataSet] = useState(null);

  // const fetchMyAPI = useCallback(async () => {
  //   let response = await fetch('../')
  //   response = await response.json()
  //   dataSet(response)
  // }, [])

  // useEffect(() => {
  //   fetchMyAPI()
  // }, [fetchMyAPI])


  useEffect(() => {
    const header = document.querySelector('header');
    if (document.body.contains(header)) {
      const headerHeight = header.offsetHeight;

      window.addEventListener('scroll', () => {
        window.scrollY >= headerHeight ?
          setStick(true) :
          setStick(false);
      })

      handleChangeTheme()
      handleStick(stick);
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
        <Main noPage={db.NoPage} links={db.Links} />
        <Footer text={db.Footer.text} copyTitle={db.Footer.copyTitle} publicYear={db.Footer.publicYear} />
      </div >
    </ThemeContext.Provider>
  )
}