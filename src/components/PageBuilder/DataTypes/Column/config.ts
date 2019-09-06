import { getBackgroundImages } from '../../utils'

export default (elem: HTMLElement) => {
    const { backgroundImages: _backgroundImages } = elem.dataset

    if (_backgroundImages) {
        getBackgroundImages(_backgroundImages)
    }

    const backgroundImages = _backgroundImages && getBackgroundImages(_backgroundImages)

    return {
        backgroundImages,
    }
}
