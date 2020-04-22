import { useRef, useCallback } from 'react'

export const useThrottle = (fn: any, delay = 100, trail?: boolean) => {
    const offset: any = useRef(trail === false ? 0 : delay)
    const last = useRef(0)
    const timeout = useRef<any>(null)

    return useCallback(() => {
        const now = +new Date()
        const elapsed = now - last.current - offset

        function exec() {
            if (timeout.current) timeout.current = clearTimeout(timeout.current)
            fn()
            last.current = now
        }

        // execute the function now
        if (elapsed > delay) exec()
        // add delayed execution (this could execute a few ms later than the delay)
        else if (!timeout.current && trail !== false) timeout.current = setTimeout(exec, delay)

        return () => {
            timeout.current = clearTimeout(timeout.current)
        }
    }, [fn, delay, trail])
}
