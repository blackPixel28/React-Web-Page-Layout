// import { useState, useEffect } from 'react';
import TopBar from './TopBar';
import '../css/Header.css';
import { Link } from 'react-router-dom'
// import Carousel from '../components/Carousel';

export default function Header({ topBarDB, headerDB }) {
    return (
        <header className="app-header">
            <TopBar text={topBarDB.text} dataTxt={topBarDB.dateTxt + ' '} timeTxt={topBarDB.timeTxt + ' '} />
            <HeaderTextAndLogo headerDB={headerDB} />
        </header>
    )
}

function HeaderTextAndLogo({ headerDB }) {
    return (
        <div className='header-text-and-logo'>
            <Link
                key='header-link-to-home'
                to='/'
                className='header-text-link'
            >
                <h1 className='h1-link'>
                    {headerDB.text}
                </h1>
            </Link>

        </div>
    )
}