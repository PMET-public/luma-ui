import { useState, useEffect, useRef } from 'react'
import throttle from 'lodash.throttle'

type UseScroll = {
    deltaX: number
    deltaY: number
    scrollLeft: number
    scrollTop: number
}

export const useWheelEvent = (): UseScroll => {
    const [wheelEvent, setWheelEvent] = useState({
        deltaX: 0,
        deltaY: 0,
        scrollLeft: 0,
        scrollTop: 0,
    })

    const throttled = useRef(throttle(e => {
        setWheelEvent({
            deltaX: e.deltaX,
            deltaY: e.deltaY,
            scrollLeft: document.documentElement.scrollLeft,
            scrollTop: document.documentElement.scrollTop,
        })
    }, 250))

    useEffect(() => {
        if (!window) return
        window.addEventListener('wheel', throttled.current)

        return () => {
            window.removeEventListener('wheel', throttled.current)
        }
    })

    return wheelEvent
}
