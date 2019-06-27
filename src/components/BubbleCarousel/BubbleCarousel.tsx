import React, { FunctionComponent, ReactElement } from 'react'
import { useTheme } from '../../hooks/useTheme'
import Image from '../Image'

export type BubbleCarouselProps = {
    children: ReactElement | ReactElement[]
    label: string
}

export type BubbleCarouselItemProps = {
    label: string
    image: string
}

type CompoundComponent = {
    Item: FunctionComponent<BubbleCarouselItemProps>
}

export const BubbleCarousel: FunctionComponent<BubbleCarouselProps> & CompoundComponent = ({
    children,
    label,
}) => {
    const { padding, grid } = useTheme()

    return (
        <div className="bubble-carousel" aria-label={label}>
            {children}

            <style jsx>{`
                .bubble-carousel {
                    ${grid({ fluid: true })}
                    overflow-x: scroll;
                    -webkit-overflow-scrolling: touch;

                    /* Trick to pad an overflown grid 🤷‍ */
                    margin: 0 ${padding};
                    padding: ${padding} 0;        
                }

                .bubble-carousel::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}

BubbleCarousel.Item = ({ label, image }) => (
    <div className="bubble-carousel-item">
        <Image alt={label} src={image}>
            <Image.Caption>{label}</Image.Caption>
        </Image>

        <style jsx>{`
            .bubble-carousel-item :global(.image) {
                align-items: center;
                display: inline-flex;
                flex-direction: column;
                flex: 0 0 auto;
            }


            .bubble-carousel-item :global(.image__img) {
                border-radius: 50%;
                display: inline-block;
                height: 7rem;
                object-fit: cover;
                object-position: center;
                overflow: hidden;
                width: 7rem;
            }

            .bubble-carousel-item :global(.image-caption) {
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
    </div>
)
