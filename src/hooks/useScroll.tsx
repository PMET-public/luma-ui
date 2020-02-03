import { useState, useEffect, useCallback, RefObject } from 'react'
import { useThrottle } from './useThrottle'

type UseScroll = {
    scrollDeltaX: number
    scrollDeltaY: number
    scrollHeight: number
    scrollWidth: number
    scrollX: number
    scrollY: number
}

type Options = {
    delay?: number
    container?: RefObject<Element>
    disabled?: boolean
}

export const useScroll = (options?: Options): UseScroll => {
    const { delay = 50, container, disabled = false } = options || {}

    const [scroll, setWheelEvent] = useState({
        scrollDeltaX: 0,
        scrollDeltaY: 0,
        scrollHeight: 0,
        scrollWidth: 0,
        scrollX: 0,
        scrollY: 0,
    })

    const handleUpdate = useCallback(() => {
        const elem = container?.current || document.scrollingElement

        if (!elem) return

        setWheelEvent({
            scrollDeltaX: elem.scrollLeft - scroll.scrollX,
            scrollDeltaY: elem.scrollTop - scroll.scrollY,
            scrollHeight: elem.scrollHeight,
            scrollWidth: elem.scrollWidth,
            scrollX: elem.scrollLeft,
            scrollY: elem.scrollTop,
        })
    }, [container?.current, scroll.scrollX, scroll.scrollY])

    const throttled = useThrottle(handleUpdate, delay, true)

    useEffect(() => {
        const root = container?.current || window

        if (disabled) return root.removeEventListener('scroll', throttled)

        handleUpdate()

        root.addEventListener('scroll', throttled)

        return () => {
            root.removeEventListener('scroll', throttled)
        }
    }, [container?.current, disabled])

    return scroll
}
