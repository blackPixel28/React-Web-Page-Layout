import setCookie from '../SetCookie';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react';
import './css/index.css'

const cookieName = 'themeIsDark';

const ThemeSwitch = ({ setActiveTheme, themes }) => {
    const [theme, setTheme] = useState(false);
    const [switchColor, setSwitchColor] = useState('white');
    const { light, dark } = themes;

    useEffect(() => {
        handleReadCooke()
        return () => handleSwitchColor(theme);
    })

    const handleSwitchTheme = (boo) => {
        setTheme(!boo);
        setCookie(cookieName, !boo, 30);
        return boo === false ? setActiveTheme(dark) : setActiveTheme(light);
    }

    const handleSwitchColor = (boo) => {
        return boo === false ? setSwitchColor('white') : setSwitchColor('black');
    }

    const handleReadCooke = () => {
        const cooke = document.cookie.split('=');
        if (cooke[0] === cookieName) {
            if (cooke[1] === 'true') {
                setTheme(true)
                setSwitchColor('black')
                setActiveTheme(dark)
            }
            else {
                setTheme(false)
                setSwitchColor('white')
                setActiveTheme(light)
            }
        }
        else return
    }

    return (
        <div className="themeSwitch">
            <div
                className={theme === false ? 'switch switchLight' : 'switch switchDark'}
                // className='switch'
                onClick={() => handleSwitchTheme(theme)}
            >
                {theme === false ?
                    <FontAwesomeIcon
                        icon="fa-solid fa-sun"
                        color={switchColor}
                    /> :
                    <FontAwesomeIcon
                        icon="fa-solid fa-moon"
                        color={switchColor}
                    />}
            </div>
        </div>
    )
}

export default ThemeSwitch