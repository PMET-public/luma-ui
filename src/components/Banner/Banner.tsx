import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import Image, { ImageProps } from '../Image'
import Button, { ButtonProps } from '../Button'

import { useTheme } from '../../theme'

export type BannerProps = Props<{
    image: ImageProps
    titles?: Array<Props<{ 
        text: string, 
        large?: boolean 
    }>>
    position?: 'top' | 'bottom'
    buttons?: ButtonProps[]
}>

export const Banner: Component<BannerProps> = ({ 
    buttons,
    image,
    position = 'top',
    titles,
    ...props
}) => {
    const { typography } = useTheme()
    
    return (
        <Element {...props} className={classes('banner', props.className)}>
            <Image {...image} className="banner__image" transition>
                <div className={classes('banner__content', `--${position}`)}>

                    {titles && (
                         <div className="banner__content__titles">
                             {titles.map(({ large = false, ...title }, index) => (
                                <Element {...title} className={classes('banner__content__titles__item', ['--large', large])}
                                    key={index}
                                />
                             ))}
                         </div>
                    )}

                    {buttons && (
                        <div className="banner__content__buttons">
                            {buttons.map((button, index) => (
                                <Button className={classes('banner__content__buttons__item')} 
                                    key={index}
                                    {...button}
                                />
                            ))}
                        </div>
                    )}
                </div>
            </Image>

            <style jsx global>{`
                .banner {
                    position: relative;
                    width: 100%;
                    
                }

                .banner__image {   
                    & .image__img {
                        min-width: 100%;
                        min-height: 100%;
                        max-width: 100%;
                        max-height: 100%;
                    }
                }

                .banner__content {
                    color: #ffffff;
                    position: absolute;
                    padding: 2rem;

                    &.--top {
                        top: 0;
                    }

                    &.--bottom {
                        bottom: 0;
                    }
                }

                .banner__content__titles {
                    display: grid;
                    grid-gap: 0.7rem;
                }

                .banner__content__titles__item {
                    margin: 0;
                    font-size: 1.6rem;

                    &.--large {
                        font-family: ${typography.headingFamily};
                        font-size: 4rem;
                        font-weight: ${typography.headingWeight};
                        text-transform: uppercase;
                        line-height: 0.9;
                    }

                    & > * {
                        font-size: inherit;
                        font-family: inherit;
                        font-weight: inherit;
                    }
                }

                .banner__content__buttons {
                    display: flex;
                    flex-wrap: wrap;
                    margin: -0.75rem;
                    padding-top: 3rem;
                }

                .banner__content__buttons__item {
                    margin: 0.75rem;
                }

                @media(--medium-screen) {
                    .banner__content {
                        padding: 5rem;
                    }

                    .banner__content__titles__item {
                        &.--large {
                            font-size: 5rem;
                        }
                    }
                }

                @media(--large-screen) {                    
                    .banner__content__titles__item {
                        &.--large {
                            font-size: 6rem;
                        }
                    }
                }
            `}</style>
        </Element>
    )
}
