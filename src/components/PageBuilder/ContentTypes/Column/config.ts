import { lazy } from 'react'
import { getStyleAsObject } from '../../../../lib'
import { getBackgroundImages } from '../../lib/utils'
import { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

const component = lazy(() => import('./'))

const props = (elem: HTMLElement, props: { [key: string]: string }) => {
    const style = getStyleAsObject(elem.style)

    const { appearance, backgroundImages } = elem.dataset

    const background: ContentWithBackgroundProps = {
        backgroundImages: backgroundImages ? getBackgroundImages(backgroundImages) : undefined,
    }

    return { appearance, background, style }
}

export default { component, props }
