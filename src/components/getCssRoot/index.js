const getCssRoot = (valueName = null, className = ':root') => {
    if (valueName === null) return console.log('valueName is null')
    return getComputedStyle(document.querySelector(className)).getPropertyValue(`--${valueName}`)
}

export default getCssRoot;