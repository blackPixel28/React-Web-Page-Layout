import { useState, useEffect } from 'react';
import '../components/FontAwesomeIcon';
import db from '../db/layout.json';
import '../css/App.css'

import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';

export default function App() {
  const [headerH, setHeaderH] = useState(0);
  const [footerH, setFooterH] = useState(0);
  const [mainH, setMainH] = useState(0);

  useEffect(() => {
    handleSetUseState()
    window.addEventListener('orientationchange', () => handleSetUseState())
    handleSetMainHeight()
  })
  const handleSetUseState = () => {
    setHeaderH(document.querySelector('header').offsetHeight)
    setFooterH(document.querySelector('footer').offsetHeight)
    setMainH(window.screen.height)
  }

  const handleSetMainHeight = () => {
    document.querySelector(':root').style.setProperty('--mainHeight', `${mainH - footerH - headerH}px`)
  }
  return (
    <div className="app">
      <Header navDB={db.Nav} text="header" />
      <Main />
      <Footer text="footer" />
    </div>
  )
}