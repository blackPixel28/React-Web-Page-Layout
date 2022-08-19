import { useState, useEffect } from 'react';
import '../components/FontAwesomeIcon';
import db from '../db/layout.json';
import '../css/App.css'
import '../css/media.css'

import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';
import Nav from '../layout/Nav';

export default function App() {
  const [navH, setNavH] = useState(0);
  const [headerH, setHeaderH] = useState(0);
  const [footerH, setFooterH] = useState(0);
  const [mainH, setMainH] = useState(0);

  useEffect(() => {
    handleResizeWindow()
    window.addEventListener('orientationchange', () => window.location.reload())
    window.addEventListener('resize', () => handleResizeWindow())
  })

  const handleResizeWindow = () => {
    setHeaderH(document.querySelector('header').offsetHeight)
    setNavH(document.querySelector('nav').offsetHeight);
    setFooterH(document.querySelector('footer').offsetHeight)
    setMainH(window.innerHeight)
    document.querySelector(':root').style.setProperty('--mainHeight', `${mainH - headerH - footerH - navH - 1}px`)
  }

  return (
    <div className="app">
      <Header navData={db.Nav} text={db.Header.text} />
      < Nav navData={db.Nav} />
      <Main />
      <Footer text={db.Footer.text} />
    </div >
  )
}