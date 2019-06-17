import React, { FunctionComponent } from 'react'
import { ReactComponentLike } from 'prop-types';

export type StoriesProps = {
    label: string
    routerLink?: ReactComponentLike
    items: Array<{ 
        imageUrl: string
        label: string
        route: any
        size?: number 
    }>
}

export const Stories: FunctionComponent<StoriesProps> = ({
    items,
    label,
    routerLink: Link = ({ ...props }) => <a {...props} />,
}) => (
        <div className="stories"
            aria-label={label}
        >
            {items.map(({ label, route, imageUrl, size = 70}, i) => (
                <Link {...route}>
                    <span className="stories__item"
                        key={`stories__item--${i}`}
                        aria-label={label}
                        style={{
                            ['--imageUrl' as any]: `url("${imageUrl}")`,
                            ['--size' as any]: size,
                        }}
                    >
                            <span className="stories__item__image"></span>
                            <span className="stories__item__label">{label}</span>
                    </span>
                </Link>
            ))}
        </div>
    )
