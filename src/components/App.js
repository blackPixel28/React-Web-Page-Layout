import { useState, useEffect } from 'react';
import '../components/FontAwesomeIcon';
import db from '../db/layout.json';
import '../css/App.css'
import { Header, Main, Footer, Nav } from '../layout';

export default function App() {
  const [stick, setStick] = useState(false);

  useEffect(() => {
    const headerHeight = document.querySelector('header').offsetHeight;
    window.addEventListener('scroll', () => {
      window.scrollY >= headerHeight ?
        setStick(true) :
        setStick(false);
    })

    return handleStick(stick)
  })

  const handleStick = () => {
    const nav = document.querySelector('nav');

    return stick === true ? nav.classList.add('stick') : nav.classList.remove('stick');
  }

  return (
    <div className="app">
      <Header headerDB={db.Header} topBarDB={db.TopBar} />
      < Nav navData={db.Nav} />
      <Main data={db} />
      <Footer text={db.Footer.text} copyTitle={db.Footer.copyTitle} publicYear={db.Footer.publicYear} />
    </div >
  )
}