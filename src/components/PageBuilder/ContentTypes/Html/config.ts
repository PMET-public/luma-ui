import { lazy } from 'react'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    return {
        source: elem.innerText,
    }
}

export default { component, props }
