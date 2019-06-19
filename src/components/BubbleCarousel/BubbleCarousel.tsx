import React, { FunctionComponent } from 'react'
import { ReactComponentLike } from 'prop-types'
import Image from '../Image'

export type BubbleCarouselProps = {
    label: string
    routerLink?: ReactComponentLike
    items: Array<{
        src: string
        label: string
        route: any
        size?: number
    }>
}

export const BubbleCarousel: FunctionComponent<BubbleCarouselProps> = ({
    items,
    label,
    routerLink: Link = ({ ...props }) => <a {...props} />,
}) => (
        <div className="bubble-carousel"
            aria-label={label}
        >
            {items.map(({ label, route, src, size = 70 }, i) => (
                <div className="bubble-carousel__item" key={`bubble-carousel__item--${i}`}>
                    <Link {...route}>
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
