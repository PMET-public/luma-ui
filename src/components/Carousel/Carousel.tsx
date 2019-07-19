import React, { ReactElement } from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type CarouselProps = {
    children: ReactElement<CarouselItemProps> | Array<ReactElement<CarouselItemProps>>
    gap?: number
    padding?: number
    show?: number
}

export type CarouselItemProps = {

}

type CompoundComponent = {
    Item: Component<CarouselItemProps>
}

export const Carousel: Component<CarouselProps> & CompoundComponent = ({
    as: Carousel = 'div',
    children,
    gap = 0,
    padding = 0,
    show = 1,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Carousel {...props} className={classes('carousel', props.className)}>
            {children}
            
            <style jsx>{`
                --padding: ${padding}rem;
                --show: ${show};
                --gap: ${gap}rem;
                --itemWidth: calc(100% / var(--show) - var(--padding));
            `}</style>

            <style jsx global>{`                    
                .carousel {
                    -webkit-overflow-scrolling: touch;   
                    display: grid;
                    grid-auto-columns: var(--itemWidth);
                    grid-auto-flow: column;
                    grid-gap: var(--gap);
                    margin-bottom: 1.5rem;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    padding-bottom: 1.5rem;
                    scroll-padding: var(--padding);
                    scroll-snap-type: x mandatory;
                    width: 100%;

                    &::-webkit-scrollbar {
                        height: 0.2rem;
                    }

                    &::-webkit-scrollbar-track {
                        margin: 0 10%;
                        border-radius: 3rem;
                        background: ${colors.primary.fade(0.95)};
                    }

                    &::-webkit-scrollbar-thumb {
                        border-radius: 3rem;
                        background: ${colors.primary.fade(0.85)};
                    }

                }
                
                ul.carousel {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }
            `}</style>
        </Carousel>
    )
}

Carousel.Item = ({
    as: CarouselItem = 'div',
    children,
    ...props
}) => {

    return (
        <CarouselItem {...props} className={classes('carousel-item', props.className)}>
            {children}

            <style jsx global>{`
                .carousel-item {
                    scroll-snap-align: center;
                    display: inline-block;
                }
            `}</style>
        </CarouselItem>
    )
}
