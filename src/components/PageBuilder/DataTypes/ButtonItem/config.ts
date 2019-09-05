import { ButtonProps } from '../../../Button'
import { LinkProps } from '../../../Link'

export default (elem: HTMLElement) => {
    const buttonElem = elem.childNodes[0] as HTMLElement
    const isLink = buttonElem.classList.contains('pagebuilder-button-link')
    const isFill = buttonElem.classList.contains('pagebuilder-button-secondary')

    const button: ButtonProps = {
        text: elem.textContent || '',
        fill: isFill || isLink ? false : true,
        border: !isLink,
    }

    const link: LinkProps | undefined =
        buttonElem.nodeName === 'A'
            ? {
                  href: buttonElem.getAttribute('href') || undefined,
                  type: buttonElem.getAttribute('data-link-type') || undefined,
                  target: buttonElem.getAttribute('target') || undefined,
              }
            : undefined

    return {
        button,
        link,
    }
}
