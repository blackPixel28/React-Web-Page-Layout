import { useState, useEffect } from 'react';
import '../components/FontAwesomeIcon';
import db from '../db/layout.json';
import '../css/App.css'
import '../css/media.css'

import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';

export default function App() {
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
    setFooterH(document.querySelector('footer').offsetHeight)
    setMainH(window.innerHeight)
    document.querySelector(':root').style.setProperty('--mainHeight', `${mainH - headerH - footerH}px`)
  }

  return (
    <div className="app">
      <Header navData={db.Nav} text={db.Header.text} />
      <Main />
      <Footer text={db.Footer.text} />
    </div >
  )
}