import { useState, useEffect, useContext, RefObject, useCallback } from 'react'
import { ThemeContext } from 'styled-components'

import { useResize } from './useResize'
import { useScroll } from './useScroll'
import { useMeasure } from './useMeasure'

export type Image =
    | string
    | {
          mobile?: string
          desktop: string
      }
    | undefined

export type Options = {
    offset?: number
    container?: Element
}

export const useImage = (ref: RefObject<any>, image: Image, options?: Options) => {
    const { offset = 0, container } = options || {}

    const [src, setSrc] = useState('')

    const [loaded, setLoaded] = useState(false)

    const [error, setError] = useState(!image)

    const [size, setSize] = useState({ width: 0, height: 0 })

    const { width: vWidth, height: vHeight } = useResize()

    const { offsetX, offsetY } = useMeasure(ref)

    const theme = useContext(ThemeContext)

    const { scrollX, scrollY } = useScroll({ container })

    const handleImageLoad = (e: any) => {
        setSize({ width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight })
        setLoaded(true)
    }

    const handleImageError = () => {
        setError(true)
    }

    /**
     * Set Mobile or Desktop Image
     */
    useEffect(() => {
        if (!image) return

        if (typeof image === 'string') {
            setSrc(image)
        } else {
            if (image.mobile && window.matchMedia(theme.breakpoints.smallOnly).matches) {
                setSrc(image.mobile)
            } else {
                setSrc(image.desktop)
            }
        }
    }, [JSON.stringify(image), vWidth])

    const loadImage = useCallback(() => {
        const img = new Image()

        img.src = src

        /**
         * Mark Image as loaded if loaded from cache
         * http://mikefowler.me/journal/2014/04/22/cached-images-load-event
         */
        if (img.complete) {
            setSize({ width: img.width, height: img.height })
            setLoaded(true)
            return
        }

        img.addEventListener('load', handleImageLoad)
        img.addEventListener('error', handleImageError)

        return () => {
            img.removeEventListener('load', handleImageLoad)
            img.removeEventListener('error', handleImageError)
        }
    }, [src])

    /**
     * Load
     */
    useEffect(() => {
        if (!src || loaded) return
        const visible = ref?.current?.offsetParent !== null
        const active = visible && offsetY - offset - vHeight < scrollY && offsetX - offset - vWidth < scrollX
        if (active) loadImage()
    }, [src, ref?.current, loaded, vHeight, vWidth, offsetX, offsetY, scrollX, scrollY])

    return {
        src: loaded ? src : '',
        loaded,
        error,
        size,
    }
}
