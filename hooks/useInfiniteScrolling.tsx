import { useEffect } from 'react'
import { useScroll } from './useScroll'
import { useResize } from './useResize'

export const useInfiniteScrolling = (callback: CallableFunction): void => {
    const { scrollY, scrollHeight } = useScroll()

    const { height } = useResize()

    useEffect(() => {
        // trigger callback when the scroll reach half of the viewport height
        if (scrollY + height > scrollHeight / 2) {
            callback()
        }
    }, [callback, scrollY, height, scrollHeight])
}
