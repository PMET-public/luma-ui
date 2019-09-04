import { toCamelCase } from '../../lib'

export const getBackgroundImages = (string: string) => {
    const raw = JSON.parse(string.replace(/\\"/g, '"'))
    const desktop = raw.desktop_image || null
    const mobile = raw.mobile_image || null

    return desktop === null && mobile === null
        ? null
        : {
              desktop,
              mobile,
          }
}

export const getStyleAsObject = (style: CSSStyleDeclaration) => {
    const output = {}
    for (let i = 0; i < style.length; i++) {
        const name = style[i]
        const value = style.getPropertyValue(name)
        output[toCamelCase(name)] = value
    }
    return output
}
