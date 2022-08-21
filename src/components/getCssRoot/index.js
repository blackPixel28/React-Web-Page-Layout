const getCssRoot = (valueName = null) => {
    if (valueName === null) return console.log('valueName is null')
    return getComputedStyle(document.querySelector(':root')).getPropertyValue(`--${valueName}`)
}

export default getCssRoot;