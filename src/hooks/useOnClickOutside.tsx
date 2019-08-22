import { useEffect, MutableRefObject } from 'react'

export const useOnClickOutside = (ref: MutableRefObject<any>, fn: (props?: any) => any) => {
    useEffect(() => {
        if (!ref.current) return

        const handleClick = (e: MouseEvent) => {
            if (!ref.current.contains(e.target)) {
                fn(e)
            }
        }

        document.addEventListener('mousedown', handleClick)
        document.addEventListener('touchstart', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('touchstart', handleClick)
        }
    }, [ref, fn])
}
