import React, { FunctionComponent } from 'react'
import Image from '../Image'
import Link from '../Link'

export type BubbleCarouselProps = {
    label: string
    items: Array<{
        label: string
        link: any
        size?: number
        src: string
    }>
}

export const BubbleCarousel: FunctionComponent<BubbleCarouselProps> = ({
    items,
    label,
}) => (
        <div className="bubble-carousel"
            aria-label={label}
        >
            {items.map(({ label, link, src, size = 70 }, i) => (
                <div className="bubble-carousel__item" key={`bubble-carousel__item--${i}`}>
                    <Link {...link}>
                        <Image className="bubble-carousel__item__image"
                            alt={label}
                            caption={label}
                            src={src}
                            style={{ ['--size' as any]: size }}
                        />
                    </Link>
                </div>
            ))}
        </div>
    )
