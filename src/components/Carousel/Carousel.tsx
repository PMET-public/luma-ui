import React, { ReactElement } from 'react'
import { Component, classes } from '../../lib'

export type CarouselProps = {
    children: ReactElement<CarouselItemProps> | Array<ReactElement<CarouselItemProps>>
    label: string
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
    label,
    padding = 0,
    ...props
}) => {
    return (
        <Carousel {...props} className={classes('carousel', props.className)}
            aria-label={label}
        >
                {children}

            <style jsx global>{`
                .carousel {
                    -webkit-overflow-scrolling: touch;   
                    scroll-snap-type: x mandatory;
                    scroll-padding: ${padding}vw;
                    overflow-x: scroll;
                    overflow-y: hidden;
                    white-space: nowrap;
                }

                ul.carousel {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .carousel .carousel-item {
                    width: calc(100% - ${padding}vw);
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
