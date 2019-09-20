import { useState, useEffect, useContext, useCallback } from 'react'
import { ThemeContext } from 'styled-components'

import { useResize } from './useResize'

export type Image =
    | string
    | {
          mobile?: string
          desktop: string
      }
    | undefined

export const useImage = (image: Image) => {
    const [src, setSrc] = useState('')
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(!image)
    const [size, setSize] = useState({ width: 0, height: 0 })
    const viewport = useResize()
    const theme = useContext(ThemeContext)

    const handleImageLoad = useCallback((e: any) => {
        setSize({ width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight })
        setLoaded(true)
    }, [])

    const handleImageError = useCallback(() => {
        setError(true)
    }, [])

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

    /**
     * Load
     */
    useEffect(() => {
        if (!src) return

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

    return {
        src,
        loaded,
        error,
        size,
    }
}
