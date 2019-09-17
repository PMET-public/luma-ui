import { lazy } from 'react'
import { getStyleAsObject } from '../../../../lib'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement) => {
    const style = getStyleAsObject(elem.style)

    const { appearance, activeTab } = elem.dataset

    return { style, appearance, activeTab }
}

export default { component, props }
