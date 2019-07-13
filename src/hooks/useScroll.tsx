import { useState, useEffect } from 'react'
import { useThrottle } from './useThrottle'

type UseScroll = {
    scrollY: number
    scrollX: number
}

export const useScroll = (): UseScroll => {
    const [scroll, setWheelEvent] = useState({
        scrollY: 0,
        scrollX: 0,
    })

    const throttled = useThrottle((e: any) => {
        setWheelEvent({
            scrollY: window.scrollY,
            scrollX: window.scrollX,
        })
    }, 150, true)

    useEffect(() => {
        document.addEventListener('scroll', throttled)

        return () => {
            document.removeEventListener('scroll', throttled)
        }
    })

    return scroll
}
