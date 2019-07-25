import { useState, useEffect } from 'react'
import { useThrottle } from './useThrottle'

type UseResize = {
   vHeight: number
   vWidth: number
}

const getValues = (): UseResize => {
    return {
        vHeight: Math.max(document.documentElement.clientHeight, window.innerHeight || 0),
        vWidth: Math.max(document.documentElement.clientWidth, window.innerWidth || 0),
    }
}

export const useResize = (fn?: (props?: any) => any): UseResize => {
    const [resize, setResize] = useState(getValues())

    const triggerResize = () => {
        if (fn) fn()
        setResize(getValues())
    }    

    const throttled = useThrottle(triggerResize, 150, true)

    useEffect(() => {
        if (fn) fn()
        window.addEventListener('resize', throttled)

        return () => {
            window.removeEventListener('resize', throttled)
        }
    }, [])

    return resize
}
