const SetCssRootValue = (valueName = null, value = null, ext = null) => {
    // if (valueName || value) return console.error('valueName or value is null');
    return document.querySelector(':root').style.setProperty(valueName, `${value}${ext === null ? '' : ext}`)
}

export default SetCssRootValue;