import React, { FunctionComponent, ReactElement } from 'react'
import { useTheme } from '../../hooks/useTheme'

export type BubbleCarouselProps = {
    children: ReactElement | ReactElement[]
    label: string
}

export const BubbleCarousel: FunctionComponent<BubbleCarouselProps> = ({
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
