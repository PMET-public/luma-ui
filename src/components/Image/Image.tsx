import React, { useState, useRef, useEffect } from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import css from './Image.css'

import ErrorIcon from '@fortawesome/fontawesome-free/svgs/solid/unlink.svg'

export type ImageProps = Props<{
    alt?: string
    height?: string | number
    src: string
    width?: string | number
    vignette?: number
    transition?: boolean
    classes?: typeof css
}>

export const ImageComponent: Component<ImageProps> = ({
    alt,
    height,
    src,
    transition = false,
    vignette = 0,
    width,
    classes,
    ...props
}) => {
    const styles = { ...css, ...classes }
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
        <Element {...props} className={styles.root}>
            <div
                className={classNames(
                    styles.wrapper,
                    [styles.vignette, loaded && vignette > 0],
                    [styles.error, error]
                )}
                style={{ ['--vignette' as any]: `${vignette}rem` }}
            >
                <img 
                    className={classNames(
                        styles.image,
                        styles.tag,
                        [styles.transition, transition], 
                        [styles.loaded, loaded]
                    )}
                    src={src}
                    ref={imageRef}
                    onLoad={handleImageLoaded}
                    onError={handleImageError}
                    {...{ alt, width, height }}
                />

                <img 
                    className={classNames(styles.image, styles.placeholder)}
                    aria-hidden="true"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAFCAQAAADIpIVQAAAADklEQVR42mNkgAJGIhgAALQABsHyMOcAAAAASUVORK5CYII="
                    {...{ width, height }}
                />

                {error && (
                    <ErrorIcon className={styles.errorIcon} />
                )}
            </div>
        </Element>
    )
}
