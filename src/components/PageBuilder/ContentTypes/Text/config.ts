import { lazy } from 'react'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    return {
        source: elem.innerHTML,
    }
}

export default { component, props }
