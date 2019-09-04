import { ButtonProps } from '../../../Button'
import { LinkProps } from '../../../Link'

export default (elem: HTMLElement) => {
    const buttonElem = elem.childNodes[0] as HTMLElement

    const button: ButtonProps = {
        text: elem.textContent || '',
        fill: buttonElem.classList.contains('pagebuilder-button-secondary') ? false : true,
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
