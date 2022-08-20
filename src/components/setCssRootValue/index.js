const SetCssRootValue = (cssName, value, type) => {
    return document.querySelector(':root').style.setProperty(cssName, `${value}${type}`)
}

export default SetCssRootValue;