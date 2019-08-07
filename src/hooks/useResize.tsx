import { useState, useEffect } from 'react'
import { useThrottle } from './useThrottle'

type UseResize = {
    vHeight: string
    vWidth: string
}

export const useResize = (fn?: (props?: any) => any): UseResize => {
    const [resize, setResize] = useState({
        vHeight: '100vh',
        vWidth: '100vw',
    })

    const triggerResize = () => {
        if (fn) fn()
        setResize({
            vHeight: `calc(${Math.max(document.documentElement.clientHeight, window.innerHeight || 0) * 0.01}px * 100)`,
            vWidth: `calc(${Math.max(document.documentElement.clientWidth, window.innerWidth || 0) * 0.01}px * 100)`,
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
