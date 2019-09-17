import { lazy } from 'react'
import { getStyleAsObject } from '../../../../lib'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    const style = getStyleAsObject(elem.style)

    return {
        style,
        as: elem.nodeName.toLowerCase(),
        text: elem.textContent,
    }
}

export default { component, props }
