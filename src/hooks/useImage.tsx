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

export type LazyLoadOptions = {
    offset?: number
    container?: RefObject<Element>
}

export const useImage = (ref: RefObject<any>, image: Image, options?: LazyLoadOptions) => {
    const { offset = 200, container } = options || {}

    const [src, setSrc] = useState('')

    const [loaded, setLoaded] = useState(false)

    const [error, setError] = useState(false)

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
        const active =
            visible && // load if the image is visible (not hidden)
            offsetY - offset - vHeight < scrollY && // load if the use has scrolled vertically near the image
            offsetX - offset - vWidth < scrollX // load if the use has scrolled horizontally to near the image
        if (active) loadImage()
    }, [src, ref?.current, loaded, vHeight, vWidth, offsetX, offsetY, scrollX, scrollY])

    return {
        src: loaded ? src : '',
        loaded,
        error,
        size,
    }
}
