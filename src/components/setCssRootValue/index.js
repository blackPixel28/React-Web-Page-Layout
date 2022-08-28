const SetCssRootValue = (valueName = null, value = null, ext = 'px', className = ':root') => {
    if (valueName || value) return console.error('valueName or value is null');
    return document.querySelector(className).style.setProperty(valueName, `${value}${ext}`)
}

export default SetCssRootValue;