import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/index.css'

const ThemeSwitch = ({ setActiveTheme, themes }) => {
    const { light, dark } = themes;

    return (
        <div className="themeSwitch">
            <div className='themeLight' onClick={() => setActiveTheme(light)}>
                <FontAwesomeIcon icon="fa-solid fa-font" />
            </div>
            <div className='themeDark' onClick={() => setActiveTheme(dark)}>
                <FontAwesomeIcon icon="fa-solid fa-font" />
            </div>
        </div>
    )
}

export default ThemeSwitch