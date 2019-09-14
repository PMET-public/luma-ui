import { lazy } from 'react'
import { getStyleAsObject } from '../../../../lib'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    const hrElement = elem.children[0] as HTMLElement

    return {
        line: {
            style: getStyleAsObject(hrElement.style),
        },
    }
}

export default { component, props }
