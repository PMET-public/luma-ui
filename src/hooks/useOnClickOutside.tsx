import { useEffect, MutableRefObject, useCallback } from 'react'

export const useOnClickOutside = (ref: MutableRefObject<any>, fn: (props?: any) => any) => {
    const handleClick = useCallback(
        (e: MouseEvent) => {
            if (!ref.current.contains(e.target)) {
                fn(e)
            }
        },
        [ref.current]
    )

    useEffect(() => {
        if (!ref.current) return

        document.addEventListener('mousedown', handleClick)
        document.addEventListener('touchstart', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
            document.removeEventListener('touchstart', handleClick)
        }
    }, [ref, fn])
}
