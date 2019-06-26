import { useState, useEffect, useRef } from 'react'
import { throttle } from '../lib/helpers'

type UseScroll = {
    scrollY: number
    scrollX: number
}

export const useScroll = (): UseScroll => {
    const [scroll, setWheelEvent] = useState({
        scrollY: 0,
        scrollX: 0,
    })

    const throttled = useRef(throttle((e: any) => {
        setWheelEvent({
            scrollY: window.scrollY,
            scrollX: window.scrollX,
        })
    }, 250, true))

    useEffect(() => {
        document.addEventListener('scroll', throttled.current)

        return () => {
            document.removeEventListener('scroll', throttled.current)
        }
    })

    return scroll
}
