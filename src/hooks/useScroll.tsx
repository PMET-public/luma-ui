import { useState, useEffect, MutableRefObject, useRef } from 'react'
import { useThrottle } from './useThrottle'

type UseScroll = {
    scrollDeltaX: number
    scrollDeltaY: number
    scrollHeight: number
    scrollWidth: number
    scrollX: number
    scrollY: number
}

export const useScroll = (ref: MutableRefObject<any> = useRef(document), fn?: (props?: any) => any): UseScroll => {

    const elem = (ref.current && ref.current.documentElement) || ref.current || { }

    const [scroll, setWheelEvent] = useState({
        scrollDeltaX: 0,
        scrollDeltaY: 0,
        scrollHeight: 0,
        scrollWidth: 0,
        scrollX: 0,
        scrollY: 0,
    })

    const throttled = useThrottle((e: any) => {
        setWheelEvent({
            scrollDeltaX: elem.scrollLeft - scroll.scrollX,
            scrollDeltaY: elem.scrollTop - scroll.scrollY,
            scrollHeight: elem.scrollHeight,
            scrollWidth: elem.scrollWidth,
            scrollX: elem.scrollLeft,
            scrollY:  elem.scrollTop,
        })

        if (fn) fn()
    }, 150, true)

    useEffect(() => {
        ref.current.addEventListener('scroll', throttled)

        return () => {
            ref.current.removeEventListener('scroll', throttled)
        }
    }, [])

    return scroll
}
