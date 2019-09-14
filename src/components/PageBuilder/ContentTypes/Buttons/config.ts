import { lazy } from 'react'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    return {}
}

export default { component, props }
