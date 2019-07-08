import React from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'
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
    const { grid } = useTheme()

    return (
        <BubbleCarousel {...props} className={classes('bubble-carousel', props.className)} aria-label={label}>
            {children}

            <style jsx global>{`
                .bubble-carousel {
                    ${grid({ fluid: true })}
                    -webkit-overflow-scrolling: touch;
                    overflow-x: scroll;

                    /* Trick to pad an overflown grid 🤷‍ */
                    margin: 0 2rem;
                    padding: 2rem 0;        
                }

                .bubble-carousel::-webkit-scrollbar {
                    display: none;
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
                font-size: 1.2rem;
                margin-top: 1rem;
                overflow: hidden;
                padding: 0;
                text-align: center;
                text-overflow: ellipsis;
                white-space: nowrap;
                width: 9rem;
            }
            
        `}</style>
    </BabelCarouselItem>
)
