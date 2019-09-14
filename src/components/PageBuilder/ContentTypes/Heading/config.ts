import { lazy } from 'react'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    return {
        as: elem.nodeName.toLowerCase(),
        text: elem.textContent,
    }
}

export default { component, props }
