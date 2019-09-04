import { getStyleAsObject } from '../../utils'

import { LinkProps } from '../../../Link'
import { ImageProps } from '../../../Image'

export default function config(elem: HTMLElement) {
    const imageElement =
        elem.children[0].nodeName === 'A'
            ? (elem.children[0].children as HTMLCollectionOf<HTMLElement>)
            : (elem.children as HTMLCollectionOf<HTMLElement>)

    const desktopSrc = imageElement[0].getAttribute('src')
    const mobileSrc = imageElement[1].getAttribute('src')

    const image: ImageProps & { style: {} } = {
        src: {
            desktop: desktopSrc || '',
            mobile: mobileSrc !== desktopSrc ? mobileSrc || undefined : undefined,
        },
        alt: imageElement[0].getAttribute('alt') || undefined,
        title: imageElement[0].getAttribute('title') || undefined,
        style: getStyleAsObject(imageElement[0].style),
    }

    const link: LinkProps | undefined =
        elem.childNodes[0].nodeName === 'A'
            ? {
                  target: elem.children[0].getAttribute('target') || undefined,
                  type: elem.children[0].getAttribute('data-link-type') || undefined,
                  href: elem.children[0].getAttribute('href') || undefined,
              }
            : undefined

    const captionElement = elem.querySelector('figcaption')
    const caption = captionElement ? captionElement.textContent : undefined

    return {
        image,
        caption,
        link,
    }
}
