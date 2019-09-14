import { lazy } from 'react'
import { getBackgroundImages } from '../../lib/utils'
import { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

const component = lazy(() => import('.'))

const props = (elem: HTMLElement) => {
    const { backgroundImages } = elem.dataset
    const background: ContentWithBackgroundProps = {
        backgroundImages: backgroundImages ? getBackgroundImages(backgroundImages) : undefined,
    }

    return { background }
}

export default { component, props }
