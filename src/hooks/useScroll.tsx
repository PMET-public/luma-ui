import { useState, useEffect, useCallback } from 'react'
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
    container?: Element | null
}

export const useScroll = (options?: Options): UseScroll => {
    const { delay = 50, container } = options || {}

    const [scroll, setWheelEvent] = useState({
        scrollDeltaX: 0,
        scrollDeltaY: 0,
        scrollHeight: 0,
        scrollWidth: 0,
        scrollX: 0,
        scrollY: 0,
    })

    const handleUpdate = useCallback(() => {
        const elem = container || document.scrollingElement

        if (!elem) return

        setWheelEvent({
            scrollDeltaX: elem.scrollLeft - scroll.scrollX,
            scrollDeltaY: elem.scrollTop - scroll.scrollY,
            scrollHeight: elem.scrollHeight,
            scrollWidth: elem.scrollWidth,
            scrollX: elem.scrollLeft,
            scrollY: elem.scrollTop,
        })
    }, [scroll.scrollX, scroll.scrollY])

    const throttled = useThrottle(handleUpdate, delay, true)

    useEffect(() => {
        handleUpdate()

        window.addEventListener('scroll', throttled)

        return () => {
            window.removeEventListener('scroll', throttled)
        }
    }, [])

    return scroll
}
