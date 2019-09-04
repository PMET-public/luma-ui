import { useState, useEffect, useContext } from 'react'
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
        if (!image) return

        const img = new Image()

        img.src = src

        /**
         * Mark Image as loaded if loaded from cache
         * http://mikefowler.me/journal/2014/04/22/cached-images-load-event
         */
        if (img.complete) {
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

    function handleImageLoad(e: any) {
        setSize({ width: e.currentTarget.naturalWidth, height: e.currentTarget.naturalHeight })
        setLoaded(true)
    }

    function handleImageError() {
        setError(true)
    }

    return {
        src,
        loaded,
        error,
        size,
    }
}
