import { useState, useEffect, useContext, RefObject, useCallback } from 'react'
import { ThemeContext } from 'styled-components'

import { useResize } from './useResize'
import { useScroll } from './useScroll'

export type Image =
    | string
    | {
          mobile?: string
          desktop: string
      }
    | undefined

export const useImage = (image: Image, lazyOffsetY?: number) => {
    const [src, setSrc] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(!image)
    const [size, setSize] = useState({ width: 0, height: 0 })
    const viewport = useResize()
    const theme = useContext(ThemeContext)

    const { scrollY } = useScroll()

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
    }, [JSON.stringify(image), viewport.width])

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
        const active = !lazyOffsetY || lazyOffsetY - viewport.height < scrollY
        if (active) loadImage()
    }, [src, loaded, viewport.height, lazyOffsetY, scrollY])

    return {
        src: loaded ? src : undefined,
        loaded,
        error,
        size,
    }
}
