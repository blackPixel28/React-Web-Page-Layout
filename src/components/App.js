import db from '../db/layout.json';
import '../css/App.css'

import Header from '../layout/Header';
import Main from '../layout/Main';
import Footer from '../layout/Footer';

export default function App() {
  return (
    <div className="app">
      <Header navDB={db.Nav} text="header" />
      <Main />
      <Footer text="footer" />
    </div>
  )
}