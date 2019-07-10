import React from 'react'
import { Component, classes } from '../../lib'
import Image, { ImageProps } from '../Image'
import Link, { LinkRoute } from '../Link'
import { useTheme } from '../../theme'
import Button from '../Button'

export type BannerProps = {
    image: ImageProps
    titles?: Array<{ title: string, large?: boolean }>
    position?: 'top' | 'bottom'
    buttons?: Array<{
        label: string
        link: LinkRoute
        primary?: boolean
    }>
}

export const Banner: Component<BannerProps> = ({ 
    as: Banner = 'div', 
    buttons,
    image,
    position = 'top',
    titles,
    ...props
}) => {
    const { typography } = useTheme()
    
    return (
        <Banner {...props} className={classes('banner', props.className)}>
            <Image {...image}>
                <div className={classes('banner__content', `--${position}`)}>

                    {titles && (
                         <div className="banner__content__titles">
                             {titles.map(({ title, large = false }, index) => (
                                <p className={classes('banner__content__titles__item', ['--large', large])}>
                                    {title}
                                </p>
                             ))}
                         </div>
                    )}

                    {buttons && (
                        <div className="banner__content__buttons">
                            {buttons.map(({ label, link, primary = false }, index) => (
                                <Button className={classes('banner__content__buttons__item')} 
                                    as={Link}
                                    key={`'banner__content__buttons__item--${index}`}
                                    color="secondary"
                                    fill={primary}
                                    {...link}
                                >
                                    {label}
                                </Button>
                            ))}
                        </div>
                    )}
                </div>
            </Image>

            <style jsx global>{`
                .banner {
                    position: relative;
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
                }

                .banner__content__buttons {
                    display: grid;
                    grid-auto-columns: minmax(max-content, max-content);
                    grid-auto-flow: column;
                    grid-gap: 1rem;
                    margin-top: 2rem;
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
                    .banner__content__buttons {
                        margin-top: 3rem;
                    }
                    
                    .banner__content__titles__item {
                        &.--large {
                            font-size: 6rem;
                        }
                    }
                }
            `}</style>
        </Banner>
    )
}
