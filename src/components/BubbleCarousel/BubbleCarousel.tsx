import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import Image, { ImageProps } from '../Image'

export type BubbleCarouselProps = Props<{
    label: string
    items?: BubbleCarouselItemProps[]
}>

export type BubbleCarouselItemProps = Props<{
    label: string
    image: ImageProps
}>

type CompoundComponent = {
    Item: Component<BubbleCarouselItemProps>
}

export const BubbleCarousel: Component<BubbleCarouselProps> & CompoundComponent = ({
    children,
    label,
    items,
    ...props
}) => {
    return (
        <Element {...props} className={classes('bubble-carousel', props.className)} aria-label={label}>
            <div className="bubble-carousel__wrapper">
                {items ? items.map((item, index) => (
                    <BubbleCarousel.Item key={index} {...item} />
                )) : children}
            </div>

            <style jsx global>{`
                .bubble-carousel {
                    /* 
                        This is... this is just unfortunate.
                        https://stackoverflow.com/questions/40733385/hiding-webkit-scrollbar-when-overflow-scrolling-touch-is-enabled 
                    */
                    overflow-y: hidden;
                    height: 10rem;
                    margin-top: -1rem;
                }

                .bubble-carousel__wrapper {
                    -webkit-overflow-scrolling: touch;
                    overflow-x: scroll;
                    padding: 1rem 0;
                    display: flex;

                    &::-webkit-scrollbar {
                        display: none;
                    }
                }
            `}</style>
        </Element>
    )
}

BubbleCarousel.Item = ({ 
    as: Wrapper = 'div',
    label, 
    image,
    ...props
}) => (
    <Element {...props} className={classes('bubble-carousel-item', props.className)}>
        <Image alt={label} {...image} />
        
        <div className="bubble-carousel-item__label">
            {label}
        </div>

        <style jsx global>{`
            .bubble-carousel-item {
                text-decoration: none;   
                padding: 0 1rem; 

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
                width: 7rem;
                line-height: 1.5;
                text-transform: uppercase;
            }
            
        `}</style>
    </Element>
)
