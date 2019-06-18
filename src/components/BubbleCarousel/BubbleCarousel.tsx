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
                        <span className="bubble-carousel__item"
                            aria-label={label}
                            style={{ ['--size' as any]: size }}
                        >
                            <img className="bubble-carousel__item__image" src={imageUrl} alt={label} />
                            <span className="bubble-carousel__item__label">{label}</span>
                        </span>
                    </Link>
                </React.Fragment>
            ))}
        </div>
    )
