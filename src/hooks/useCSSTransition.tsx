import { MutableRefObject, useEffect, useState, useLayoutEffect } from 'react'

export const useCSSTransition = (refEl: MutableRefObject<HTMLElement | null>, isActive: boolean, duration: number): boolean => {

    const [state, setState] = useState(false)

    useLayoutEffect(() => {
        if (refEl.current === null) return
        refEl.current.style.setProperty('--transition-duration', `${duration}ms`)
        refEl.current.classList.add('css-transition')
    })

    useEffect(() => {
        const timer = setTimeout(() => {
            setState(isActive)
        }, isActive ? 0 : duration)

        if (refEl.current) {
            refEl.current.classList.toggle('css-transition--active', isActive)
        }

        return () => {
            clearTimeout(timer)
        }
    }, [isActive, state])

    return state
}
