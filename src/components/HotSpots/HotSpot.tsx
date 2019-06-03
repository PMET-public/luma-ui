import React, { FunctionComponent, ReactNode, useRef, useContext } from 'react'
import { getbem } from '../../lib/helpers'
import Card from '../../utilities/Card'
import { useCSSTransition } from '../../hooks/useCSSTransition'
import { HotSpotsContext } from './HotSpotContainer'

export type HotSpotProps = {
    children: ReactNode
    coords: { x: number, y: number }
    id: string | number
    label: string
    size?: number
}

export const HotSpot: FunctionComponent<HotSpotProps> = ({
    children,
    coords,
    id,
    label,
    size = 4,
}) => {
    const context = useContext(HotSpotsContext)
    const isOpen = id === context.active
    const contentEl = useRef(null)
    const contentTransition = useCSSTransition(contentEl, isOpen, 250)

    const handleToggle = () => {
        context.set(isOpen ? null : id)
    }

    return (
        <div
            className={getbem(
                'hot-spot',
                ['open', isOpen],
                ['bottom', coords.y > 50],
                ['right', coords.x > 50],
                ['open', isOpen]
            )}
            style={{
                ['--cords-x' as any]: `${coords.x}%`,
                ['--cords-y' as any]: `${coords.y}%`,
                ['--size' as any]: `${size}rem`,
            }}
        >
            <div
                aria-label={label}
                className={getbem('hot-spot__button', ['open', isOpen])}
                onClick={handleToggle}
                role="button"
                tabIndex={0}
            >
                <svg
                    className={getbem('hot-spot__button__icon', ['open', isOpen])}
                    viewBox="0 0 511 511"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <polygon points="511 191.97 319.02 191.97 319.02 0 191.97 0 191.97 191.97 0 191.97 0 319.02 191.97 319.02 191.97 511 319.02 511 319.02 319.02 511 319.02 511 191.97" />
                </svg>
            </div>

            {contentTransition && (
                <Card className={getbem('hot-spot__content', ['open', isOpen])} ref={contentEl}>
                    {children}
                </Card>
            )}

        </div>
    )
}
