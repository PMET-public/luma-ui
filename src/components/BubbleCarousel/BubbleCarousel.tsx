import React, { FunctionComponent } from 'react'
import { ReactComponentLike } from 'prop-types'

export type BubbleCarouselProps = {
    label: string
    routerLink?: ReactComponentLike
    items: Array<{
        imageUrl: string
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
            {items.map(({ label, route, imageUrl, size = 70 }, i) => (
                <React.Fragment key={`bubble-carousel__item--${i}`}>
                    <Link {...route}>
                        <figure className="bubble-carousel__item" style={{ ['--size' as any]: size }}>
                            <img className="bubble-carousel__item__image" src={imageUrl} alt={label} />
                            <figcaption className="bubble-carousel__item__label">{label}</figcaption>
                        </figure>
                    </Link>
                </React.Fragment>
            ))}
        </div>
    )
