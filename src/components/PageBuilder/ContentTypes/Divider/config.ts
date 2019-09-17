import { lazy } from 'react'
import { getStyleAsObject } from '../../../../lib'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    const style = getStyleAsObject(elem.style)

    const hrElement = elem.children[0] as HTMLElement

    return {
        style,
        line: {
            style: getStyleAsObject(hrElement.style),
        },
    }
}

export default { component, props }
