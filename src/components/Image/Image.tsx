import React, { FunctionComponent, useState, useRef, useEffect } from 'react'
import { Root, LoadedImage, Placeholder, ErrorIcon } from './Image.styled'

export type ImageProps = {
    alt?: string
    height?: string | number
    src: string
    width?: string | number
    vignette?: number
    transition?: boolean
}

export const ImageComponent: FunctionComponent<ImageProps> = ({
    alt,
    height,
    src,
    transition = false,
    vignette = 0,
    width,
    ...props
}) => {
    const [loaded, setLoaded] = useState(false)
    const [error, setError] = useState(false)
    const imageRef = useRef<HTMLImageElement>(null)

    /**
     * Mark Image as loaded if loaded from cache
     * http://mikefowler.me/journal/2014/04/22/cached-images-load-event
     */
    useEffect(() => {
        if (imageRef.current && imageRef.current.complete) setLoaded(true)
    }, [src])

    function handleImageLoaded() {
        setLoaded(true)
    }

    function handleImageError() {
        setError(true)
    }

    return (
        <Root vignette={vignette} {...props}>
            <LoadedImage
                error={error}
                loaded={loaded}
                ref={imageRef}
                src={src}
                transition={transition}
                onError={handleImageError}
                onLoad={handleImageLoaded}
                {...{ alt, width, height }}
            />

            <Placeholder
                aria-hidden="true"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                {...{ width, height }}
            />

            {error && <ErrorIcon />}
        </Root>
    )
}
