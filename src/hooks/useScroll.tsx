import { useState, useEffect } from 'react'
import { useThrottle } from './useThrottle'

type UseScroll = {
    scrollDeltaX: number
    scrollDeltaY: number
    scrollHeight: number
    scrollWidth: number
    scrollX: number
    scrollY: number
}

export const useScroll = (): UseScroll => {
    const [scroll, setWheelEvent] = useState({
        scrollDeltaX: 0,
        scrollDeltaY: 0,
        scrollHeight: 0,
        scrollWidth: 0,
        scrollX: 0,
        scrollY: 0,
    })

    const throttled = useThrottle(() => {
        const elem: any = document.scrollingElement
        setWheelEvent({
            scrollDeltaX: elem.scrollLeft - scroll.scrollX,
            scrollDeltaY: elem.scrollTop - scroll.scrollY,
            scrollHeight: elem.scrollHeight,
            scrollWidth: elem.scrollWidth,
            scrollX: elem.scrollLeft,
            scrollY: elem.scrollTop,
        })
    }, 150, true)

    useEffect(() => {
        window.addEventListener('scroll', throttled)

        return () => {
            window.removeEventListener('scroll', throttled)
        }
    }, [])

    return scroll
}
