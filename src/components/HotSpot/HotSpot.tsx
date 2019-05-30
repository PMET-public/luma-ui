import React, { FunctionComponent, ReactNode, useRef } from 'react'
import { getbem } from '../../lib/helpers'
import Card from '../../utilities/Card'
import { useCSSTransition } from '../../hooks/useCSSTransition'

export type HotSpotProps = {
    children: ReactNode
    coords: { x: number, y: number }
    isOpen?: boolean
    label: string
    onClick: () => void
}

export const HotSpot: FunctionComponent<HotSpotProps> = ({
    children,
    coords,
    isOpen = false,
    label,
    onClick,
}) => {
    const contentEl = useRef(null)
    const contentTransition = useCSSTransition(contentEl, isOpen, 250)

    return (
        <div className="hot-spot" style={{ transform: `translate(${coords.x}px, ${coords.y}px)` }}>
            <button
                aria-label={`${isOpen ? 'open' : 'close'} ${label}`}
                className={getbem('hot-spot__button', ['open', isOpen])}
                {...onClick}
            >
                <svg
                    className={getbem('hot-spot__button__icon', ['open', isOpen])}
                    viewBox="0 0 511 511"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon points="511 191.97 319.02 191.97 319.02 0 191.97 0 191.97 191.97 0 191.97 0 319.02 191.97 319.02 191.97 511 319.02 511 319.02 319.02 511 319.02 511 191.97" />
                </svg>
            </button>

            {contentTransition && (
                <Card className="hot-spot__content" ref={contentEl}>
                    {children}
                </Card>
            )}

        </div>
    )
}
