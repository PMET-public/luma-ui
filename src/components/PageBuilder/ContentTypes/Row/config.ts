import { lazy } from 'react'
import { getBackgroundImages } from '../../lib/utils'
import { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'
import { getStyleAsObject } from '../../../../lib'

const component = lazy(() => import('.'))

const props = (elem: HTMLElement) => {
    const style = getStyleAsObject(elem.style)

    const { appearance, backgroundImages } = elem.dataset
    const background: ContentWithBackgroundProps = {
        backgroundImages: backgroundImages ? getBackgroundImages(backgroundImages) : undefined,
    }

    return {
        /**
         * Patch: add "full-screen" appearance based on className for now
         */
        appearance: elem.classList.contains('full-screen') ? 'full-screen' : appearance,

        background,
        style,
    }
}

export default { component, props }
