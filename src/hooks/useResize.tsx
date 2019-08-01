import { useState, useEffect } from 'react'
import { useThrottle } from './useThrottle'

type UseResize = {
    vHeight: number
    vWidth: number
}

export const useResize = (fn?: (props?: any) => any): UseResize => {
    const [resize, setResize] = useState({
        vHeight: 0,
        vWidth: 0,
    })

    const triggerResize = () => {
        if (fn) fn()
        setResize({
            vHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
            vWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
        })
    }

    const throttled = useThrottle(triggerResize, 150, true)

    useEffect(() => {
        triggerResize()
        
        if (fn) fn()

        window.addEventListener('resize', throttled)

        return () => {
            window.removeEventListener('resize', throttled)
        }
    }, [])

    return resize
}
