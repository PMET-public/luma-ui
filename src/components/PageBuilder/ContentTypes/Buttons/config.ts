import { lazy } from 'react'
import { getStyleAsObject } from '../../../../lib'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    const style = getStyleAsObject(elem.style)

    const { appearance, sameWidth } = elem.dataset

    return {
        appearance,
        sameWidth,
        style,
    }
}

export default { component, props }
