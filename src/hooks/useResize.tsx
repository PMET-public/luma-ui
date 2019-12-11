import { useState, useEffect, useCallback, useContext } from 'react'
import { ThemeContext } from 'styled-components'

import { useThrottle } from './useThrottle'

type breakpoints = {
    smallOnly: boolean
    medium: boolean
    mediumOnly: boolean
    untilMedium: boolean
    large: boolean
    largeOnly: boolean
    untilLarge: boolean
    xLarge: boolean
}

type UseResize = {
    vHeight: string
    vWidth: string
    height: number
    width: number
    breakpoints: breakpoints
}

export const useResize = (callback?: (values?: UseResize) => any): UseResize => {
    const { breakpoints } = useContext(ThemeContext)

    const [resize, setResize] = useState<UseResize>({
        vHeight: '100vh',
        vWidth: '100vw',
        height: 0,
        width: 0,
        breakpoints: {
            smallOnly: false,
            medium: false,
            mediumOnly: false,
            untilMedium: false,
            large: false,
            largeOnly: false,
            untilLarge: false,
            xLarge: false,
        },
    })

    const triggerResize = useCallback(() => {
        const height = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
        const width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)

        const values = {
            height,
            width,
            vHeight: `${height}px`,
            vWidth: `${width}px`,
            breakpoints: {
                smallOnly: window.matchMedia(breakpoints.smallOnly).matches,
                mediumOnly: window.matchMedia(breakpoints.mediumOnly).matches,
                medium: window.matchMedia(breakpoints.medium).matches,
                untilMedium: window.matchMedia(breakpoints.untilMedium).matches,
                largeOnly: window.matchMedia(breakpoints.largeOnly).matches,
                large: window.matchMedia(breakpoints.large).matches,
                untilLarge: window.matchMedia(breakpoints.untilLarge).matches,
                xLarge: window.matchMedia(breakpoints.xLarge).matches,
            },
        }

        setResize(values)

        typeof callback === 'function' && callback(values)
    }, [callback])

    const throttled = useThrottle(triggerResize, 150, true)

    useEffect(() => {
        triggerResize()

        window.addEventListener('resize', throttled)

        return () => {
            window.removeEventListener('resize', throttled)
        }
    }, [])

    return resize
}
