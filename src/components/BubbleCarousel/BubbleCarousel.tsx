import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import Image, { ImageProps } from '../Image'

export type BubbleCarouselProps = Props<{
    items?: BubbleCarouselItemProps[]
}>

export type BubbleCarouselItemProps = Props<{
    image: ImageProps
}>

type CompoundComponent = {
    Item: Component<BubbleCarouselItemProps>
}

export const BubbleCarousel: Component<BubbleCarouselProps> & CompoundComponent = ({
    children,
    items,
    ...props
}) => {

    return (
        <Element {...props} className={classes('bubble-carousel', props.className)} 
            style={{
                ['--size' as any]: '9rem',
            }}
        >
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
                    height: calc(var(--size) + 2rem);
                }

                .bubble-carousel__wrapper {
                    -webkit-overflow-scrolling: touch;
                    overflow-x: scroll;
                    margin-top: -1rem;
                    padding: 1rem 0 1rem;
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
    text,
    image,
    ...props
}) => (
    <Element {...props} className={classes('bubble-carousel-item', props.className)}>
        <Image 
            alt="null" 
            transition 
            {...image} 
            className={classes('bubble-carousel-item__image', image.className)}
        />
        
        <Element className="bubble-carousel-item__label">
            {text}
        </Element>

        <style jsx global>{`
            .bubble-carousel-item {
                text-decoration: none;   
                padding: 0 0.75rem; 

                &:last-of-type {
                    padding-right: 0.75rem;
                }
                &:first-of-type {
                    padding-left: 0.75rem;
                }
            }

            .bubble-carousel-item__image {
                align-items: center;
                display: inline-flex;
                flex-direction: column;
                flex: 0 0 auto;
            }

            .bubble-carousel-item__image .image__img {
                border-radius: 50%;
                display: inline-block;
                height: var(--size);
                object-fit: cover;
                object-position: center;
                overflow: hidden;
                width: var(--size);
            }

            .bubble-carousel-item__label {
                font-size: 1.2rem;
                margin-top: 0.2rem;
                overflow: hidden;
                padding: 0;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: var(--size);
                line-height: 1.5;
                text-transform: uppercase;
            }
            
        `}</style>
    </Element>
)
