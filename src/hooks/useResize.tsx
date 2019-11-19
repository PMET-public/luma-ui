import { useState, useEffect, useCallback } from 'react'
import { useThrottle } from './useThrottle'

type UseResize = {
    vHeight: string
    vWidth: string
    height: number
    width: number
}

export const useResize = (fn?: (props?: any) => any): UseResize => {
    const [resize, setResize] = useState({
        vHeight: '100vh',
        vWidth: '100vw',
        height: 0,
        width: 0,
    })

    const triggerResize = useCallback(() => {
        if (fn) fn()
        const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
        setResize({
            height,
            width,
            vHeight: `${height}px`,
            vWidth: `${width}px`,
        })
    }, [fn])

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
