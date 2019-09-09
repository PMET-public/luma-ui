import { LinkProps } from '../../../Link'
import { getBackgroundImages } from '../../lib/utils'
import { getStyleAsObject } from '../../../../lib'
import { ContentWithBackgroundProps } from '../../lib/ContentWithBackground'

export default (elem: HTMLElement) => {
    /** Get Button */
    const link: LinkProps | undefined =
        elem.childNodes[0].nodeName === 'A'
            ? {
                  target: elem.children[0].getAttribute('target') || undefined,
                  type: elem.children[0].getAttribute('data-link-type') || undefined,
                  href: elem.children[0].getAttribute('href') || undefined,
              }
            : undefined

    /** Get Overlay */
    // const overlayElem = elem.querySelector('[data-element="overlay"]') as HTMLElement
    // const overlay = overlayElem.dataset

    /** Get Bakground Image */
    const wrapperElem = elem.querySelector('[data-element="wrapper"]') as HTMLElement

    const { backgroundImages } = wrapperElem.dataset

    const background: ContentWithBackgroundProps = {
        ...wrapperElem.dataset,
        backgroundImages: backgroundImages ? getBackgroundImages(backgroundImages) : undefined,
        style: getStyleAsObject(wrapperElem.style),
    }

    /** Get Button */
    const buttonElem = elem.querySelector('[data-element="button"]') as HTMLElement
    const button = {
        secondary: buttonElem.classList.contains('pagebuilder-button-secondary') ? true : false,
        text: buttonElem.textContent || '',
        style: getStyleAsObject(buttonElem.style),
        // type: buttonElem.getAttribute('data-link-type') || undefined,
    }

    /** Get Content */
    const contentElem = elem.querySelector('[data-element="content"]') as HTMLElement
    const content = {
        ...contentElem.dataset,
        html: contentElem.innerHTML,
        style: getStyleAsObject(contentElem.style),
    }

    /** Get Overlay */
    const overlayElem = elem.querySelector('[data-element="overlay"]') as HTMLElement
    const overlay = {
        ...overlayElem.dataset,
        style: getStyleAsObject(overlayElem.style),
    }

    console.log(elem)

    return {
        link,
        background,
        button,
        content,
        overlay,
    }
}
