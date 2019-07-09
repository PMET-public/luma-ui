import React from 'react'
import { Component, classes } from '../../lib'
import Image from '../Image'

export type BubbleCarouselProps = {
    label: string
}

export type BubbleCarouselItemProps = {
    label: string
    image: string
}

type CompoundComponent = {
    Item: Component<BubbleCarouselItemProps>
}

export const BubbleCarousel: Component<BubbleCarouselProps> & CompoundComponent = ({
    as: BubbleCarousel = 'div',
    children,
    label,
    ...props
}) => {
    return (
        <BubbleCarousel {...props} className={classes('bubble-carousel', props.className)} aria-label={label}>
            <div className="bubble-carousel__wrapper">
                {children}
            </div>

            <style jsx global>{`
                .bubble-carousel {
                    /* 
                        This is... this is just unfortunate.
                        https://stackoverflow.com/questions/40733385/hiding-webkit-scrollbar-when-overflow-scrolling-touch-is-enabled 
                    */
                    overflow-y: hidden;
                    height: 10rem;
                    margin-bottom: 1rem;
                }

                .bubble-carousel__wrapper::-webkit-scrollbar {
                    display: none;
                }

                .bubble-carousel__wrapper {
                    -webkit-overflow-scrolling: touch;
                    overflow-x: scroll;
                    padding: 1rem 0;
                    display: flex;
                }
            `}</style>
        </BubbleCarousel>
    )
}

BubbleCarousel.Item = ({ 
    as: BabelCarouselItem = 'div',
    label, 
    image,
    ...props
}) => (
    <BabelCarouselItem {...props} className={classes('bubble-carousel-item', props.className)}>
        <Image alt={label} src={image} />
        
        <div className="bubble-carousel-item__label">
            {label}
        </div>

        <style jsx global>{`
            .bubble-carousel-item {
                text-decoration: none;   
                padding: 0 0.25rem; 

                &:last-of-type {
                    padding-right: 1rem;
                }
                &:first-of-type {
                    padding-left: 1rem;
                }
            }

            .bubble-carousel-item .image {
                align-items: center;
                display: inline-flex;
                flex-direction: column;
                flex: 0 0 auto;
            }

            .bubble-carousel-item .image__img {
                border-radius: 50%;
                display: inline-block;
                height: 7rem;
                object-fit: cover;
                object-position: center;
                overflow: hidden;
                width: 7rem;
            }

            .bubble-carousel-item__label {
                font-size: 1.1rem;
                margin-top: 0.2rem;
                overflow: hidden;
                padding: 0;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 8rem;
                line-height: 1.5;
                text-transform: uppercase;
            }
            
        `}</style>
    </BabelCarouselItem>
)
