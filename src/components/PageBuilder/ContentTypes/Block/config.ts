import { lazy } from 'react'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    return {
        source: elem.children[0].innerHTML,
    }
}

export default { component, props }
