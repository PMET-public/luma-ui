import React, { FunctionComponent } from 'react'

export type StoriesProps = {
    label: string
    items: Array<{ label: string, imageUrl: string, url: string, size?: number }>
}

export const Stories: FunctionComponent<StoriesProps> = ({
    items,
    label,
}) => (
        <div className="stories"
            aria-label={label}
        >
            {items.map(({ label, url, imageUrl, size = 70}, i) => (
                <a className="stories__item"
                    key={`stories__item--${i}`}
                    aria-label={label}
                    href={url}
                    style={{
                        ['--imageUrl' as any]: `url("${imageUrl}")`,
                        ['--size' as any]: size,
                    }}
                >
                    <span className="stories__item__image"></span>
                    <span className="stories__item__label">{label}</span>
                </a>
            ))}
        </div>
    )
