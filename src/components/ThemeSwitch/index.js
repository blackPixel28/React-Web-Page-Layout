import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './css/index.css'

const ThemeSwitch = () => {
    return (
        <div className="themeSwitch">
            <div className='themeLight'>
                <FontAwesomeIcon icon="fa-solid fa-font" />
            </div>
            <div className='themeDark'>
                <FontAwesomeIcon icon="fa-solid fa-font" />
            </div>
        </div>
    )
}

export default ThemeSwitch