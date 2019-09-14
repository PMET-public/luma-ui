import { lazy } from 'react'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    return {
        url: elem.getElementsByTagName('iframe')[0].getAttribute('src'),
    }
}

export default { component, props }
