import { lazy } from 'react'
import { getStyleAsObject } from '../../../../lib'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    const style = getStyleAsObject(elem.style)

    return {
        style,
        url: elem.getElementsByTagName('iframe')[0].getAttribute('src'),
    }
}

export default { component, props }
