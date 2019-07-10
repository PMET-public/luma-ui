import React, { ReactElement } from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type CarouselProps = {
    children: ReactElement<CarouselItemProps> | Array<ReactElement<CarouselItemProps>>
    padding?: number
}

export type CarouselItemProps = {

}

type CompoundComponent = {
    Item: Component<CarouselItemProps>
}

export const Carousel: Component<CarouselProps> & CompoundComponent = ({
    as: Carousel = 'div',
    children,
    padding = 0,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Carousel {...props} className={classes('carousel', props.className)}
        >
            {children}

            <style jsx global>{`                    
                .carousel {
                    -webkit-overflow-scrolling: touch;   
                    display: grid;
                    grid-auto-columns: calc(100% - ${padding}rem);
                    grid-auto-flow: column;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    padding-bottom: 1.5rem;
                    margin-bottom: 1.5rem;
                    scroll-padding: ${padding}rem;
                    scroll-snap-type: x mandatory;

                    &::-webkit-scrollbar {
                        height: 0.2rem;
                    }

                    &::-webkit-scrollbar-track {
                        margin: 0 10%;
                        border-radius: 3rem;
                        background: ${colors.primary.fade(0.95)}; /* TODO: Fix TS Type */
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
