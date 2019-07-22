import { useState, useEffect, MutableRefObject, useRef } from 'react'
import { useThrottle } from './useThrottle'

type UseScroll = {
    scrollY: number
    scrollX: number
    scrollHeight: number
    scrollWidth: number
}

export const useScroll = (ref: MutableRefObject<any> = useRef(document), fn?: (props?: any) => any): UseScroll => {

    const elem = (ref.current && ref.current.documentElement) || ref.current || { }
    
    const [scroll, setWheelEvent] = useState({
        scrollY: 0,
        scrollX: 0,
        scrollHeight: 0,
        scrollWidth: 0,
    })

    const throttled = useThrottle((e: any) => {
        setWheelEvent({
            scrollY:  elem.scrollTop,
            scrollX: elem.scrollLeft,
            scrollHeight: elem.scrollHeight,
            scrollWidth: elem.scrollWidth,
        })

        if (fn) fn()
    }, 150, true)

    useEffect(() => {
        ref.current.addEventListener('scroll', throttled)

        return () => {
            ref.current.removeEventListener('scroll', throttled)
        }
    })

    return scroll
}
