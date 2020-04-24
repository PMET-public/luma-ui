import { useMemo } from 'react'

import { useResize } from './useResize'

export type ImgSrc =
    | string
    | {
          mobile?: string
          desktop: string
      }
    | undefined

export const useImage = (src: ImgSrc) => {
    const { width: vWidth, breakpoints } = useResize()

    return useMemo(() => {
        if (typeof src === 'object') {
            if (src.mobile && breakpoints.smallOnly) {
                return src.mobile
            } else {
                return src.desktop
            }
        }

        return src
    }, [src, vWidth, breakpoints])
}
