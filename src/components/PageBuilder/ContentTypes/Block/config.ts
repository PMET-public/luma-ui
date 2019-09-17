import { lazy } from 'react'
import { getStyleAsObject } from '../../../../lib'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    const style = getStyleAsObject(elem.style)

    const source = elem.children[0].innerHTML

    return {
        style,
        source,
    }
}

export default { component, props }
