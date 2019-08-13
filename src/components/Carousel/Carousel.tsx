import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

export type CarouselProps = Props<{
    gap?: number
    items?: CarouselItemProps[]
    padding?: number
    show?: number
}>

export type CarouselItemProps = Props<{ }>

type CompoundComponent = {
    Item: Component<CarouselItemProps>
}

export const Carousel: Component<CarouselProps> & CompoundComponent = ({
    children,
    gap = 0,
    items,
    padding = 0,
    show = 1,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Element {...props} className={classes('carousel', props.className)}
            style={{
                ['--padding' as any]: `${padding}rem`,
                ['--show' as any]: show,
                ['--gap' as any]: `${gap}rem`,
                ['--itemWidth' as any]: `calc(100% / var(--show) - var(--padding))`,
            }}
        >
            {items ? items.map((item, index) => (
                <Carousel.Item key={index} {...item} />
            )) : children}

            <style jsx global>{`                    
                .carousel {
                    -webkit-overflow-scrolling: touch;   
                    display: grid;                   
                    grid-gap: var(--gap);
                    scroll-padding: var(--padding);
                    width: 100%;
                    grid-auto-columns: var(--itemWidth);
                    grid-auto-flow: column;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    scroll-snap-type: x mandatory;
                    padding-bottom: 1rem;

                    &::-webkit-scrollbar {
                        height: 0.2rem;
                    }

                    &::-webkit-scrollbar-track {
                        margin: 0 10%;
                        border-radius: 3rem;
                        background: ${colors.primary15};
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 3rem;
                        background: ${colors.primary25};
                    }

                }
                
                ul.carousel {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </Element>
    )
}

Carousel.Item = ({
    children,
    ...props
}) => {

    return (
        <Element {...props} className={classes('carousel-item', props.className)}>
            {children}

            <style jsx global>{`
                .carousel-item {
                    scroll-snap-align: center;
                    display: inline-block;
                }
            `}</style>
        </Element>
    )
}
