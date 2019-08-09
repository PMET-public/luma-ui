import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import Image, { ImageProps } from '../Image'
import { useTheme } from '../../theme'

export type ThumbSwatchesProps = Props<{
    items: Array<Props<{
        image: ImageProps
        active?: boolean
    }>>
}>

export const ThumbSwatches: Component<ThumbSwatchesProps> = ({
    items = [],
    title,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Element {...props} className={classes('thumb-swatches', props.className)}>
            {items.map(({ image, active = false, ...item }, index) => (
                <Element 
                    as="button" 
                    {...item} 
                    className={classes('thumb-swatches__item', item.className, ['--active', active], ['--disabled', !!item.disabled])}
                    key={index}
                >
                    <div className="thumb-swatches__item__wrapper" >
                        {image && (
                            <Image
                                {...image}
                                transition
                                className={classes('thumb-swatches__item__image', image.className)}
                            />
                        )}
                    </div>
                </Element>
            ))}

            <style jsx global>{`
                .thumb-swatches {
                    display: grid;
                    grid-gap: 1rem;
                    grid-template-columns: repeat(4, 1fr);
                }

                .thumb-swatches__item {
                    border-radius: 0.5rem;
                    border: 0.1rem solid ${colors.primary.fade(0.9)};
                    padding: 0.3rem;
                    transition: all 305ms ease;

                    &.--disabled {    
                        filter: opacity(30%) contrast(80%);
                    }

                    &.--active {
                        border-color: ${colors.primary};
                    }

                    &:hover:not(.--disabled) {
                        border-color: ${colors.primary.fade(0.6)};
                    }
                }

                .thumb-swatches__item__wrapper {
                    display: grid;
                    grid-gap: 1rem;
                    position: relative;
                }

                .thumb-swatches__item__title {
                    text-align: center;
                }

                .thumb-swatches__item__image {
                    background-color: white;
                    overflow: hidden;
                    border-radius: 0.5rem;
                    overflow: hidden;

                    & .image__img {
                        height: auto;
                        object-fit: cover;
                        object-position: center;
                        overflow: hidden;
                        width: 100%;               
                    }           
                }
            `}</style>
        </Element>
    )
}
