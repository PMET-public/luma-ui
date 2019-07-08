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
    const items = React.Children.toArray(children)

    return (
        <Carousel {...props} className={classes('carousel', props.className)}
            aria-label={label}
        >
            <div className="carousel__wrapper">
                {children}
            </div>

            <style jsx>{`
                .carousel {
                    -webkit-overflow-scrolling: touch;   
                    overflow-x: auto;
                    scroll-snap-type: x mandatory;       
                    scroll-padding: 0 ${padding}rem;
                    width: 100%;
                }

                ul.carousel {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                .carousel__wrapper {
                    display: flex;
                    width: calc(${items.length * 100}% - ${items.length * padding}rem);
                }

                .carousel :global(.carousel-item) {
                    width: calc(100% - ${padding}rem);
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

            <style jsx>{`
                .carousel-item {
                    scroll-snap-align: center;
                }
            `}</style>
        </CarouselItem>
    )
}
