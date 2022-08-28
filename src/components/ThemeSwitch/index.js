import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react';
import './css/index.css'

const ThemeSwitch = ({ setActiveTheme, themes }) => {
    const [theme, setTheme] = useState(false);
    const [switchColor, setSwitchColor] = useState(false);
    const { light, dark } = themes;

    useEffect(() => {
        handleSwitchColor(theme);
    })

    const handleSwitchTheme = (boo) => {
        setTheme(!boo);
        return boo === false ? setActiveTheme(dark) : setActiveTheme(light);
    }

    const handleSwitchColor = (boo) => {
        return boo === false ? setSwitchColor('white') : setSwitchColor('black');
    }

    return (
        <div className="themeSwitch">
            <div className='switch' onClick={() => handleSwitchTheme(theme)}>
                <FontAwesomeIcon icon="fa-solid fa-circle-half-stroke" color={switchColor} />
            </div>
        </div>
    )
}

export default ThemeSwitch