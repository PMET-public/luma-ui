import React, { FunctionComponent } from 'react'

import Image, { ImageCaption } from '../Image'

export type BubbleCarouselItemProps = {
    label: string
    image: string
}

export const BubbleCarouselItem: FunctionComponent<BubbleCarouselItemProps> = ({ label, image }) => (
    <div className="bubble-carousel-item">
        <Image alt={label} src={image}>
            <ImageCaption>{label}</ImageCaption>
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
