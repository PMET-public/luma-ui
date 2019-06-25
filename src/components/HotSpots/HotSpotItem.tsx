import React, { FunctionComponent, ReactNode, useRef, useContext } from 'react'
import { useCSSTransition } from '../../hooks/useCSSTransition'
import { HotSpotsContext } from './HotSpots'
import { useTheme } from '../../hooks/useTheme'

export type HotSpotItemProps = {
    children?: ReactNode
    coords: { x: number, y: number }
    id: string | number
    label: string
}

export const HotSpotItem: FunctionComponent<HotSpotItemProps> = ({
    children,
    coords,
    id,
    label,
}) => {
    const { colors } = useTheme()
    const context = useContext(HotSpotsContext)
    const isActive = id === context.active
    const contentEl = useRef(null)
    const contentTransition = useCSSTransition(contentEl, isActive, 250)

    const handleToggle = () => {
        context.set(isActive ? null : id)
    }

    return (
        <div className="hot-spot">
            <button className="hot-spot__button"
                aria-label={label}
                onClick={handleToggle}
                tabIndex={0}
                type="button"
            ></button>

            {children && contentTransition && (
                <div className="hot-spot__content" ref={contentEl}>
                    {children}
                </div>
            )}

            <style jsx>{`
                .hot-spot__button {                 
                    background-color: ${isActive ? colors.primary : colors.accent};
                    border-radius: 50%;
                    border: none;
                    cursor: pointer;
                    font-size: 2rem;
                    height: 1em;
                    left: ${coords.x}%;
                    opacity: 0.85;
                    padding: 0;
                    position: absolute;
                    top: ${coords.y}%;
                    width: 1em;
                    z-index: 2;    
                }


                .hot-spot__button:focus {
                    outline: 0;
                }

                .hot-spot__button::after {
                    animation: pulse 2s infinite;
                    border-radius: 50%;
                    box-shadow: inset 0 0 1px 1px ${colors.accent};
                    content: "";
                    height: 100%;
                    left: 0;
                    position: absolute;
                    top: 0;
                    width: 100%;
                    display: ${isActive ? 'none' : 'block'};
                }

                .hot-spot__content {
                    ${coords.x > 50 ? `
                        --left: unset;
                        --right: calc(${100 - coords.x}% - 1.3em);
                    ` : `
                        --left: ${coords.x}%;
                        --right: unset;
                    `}

                    ${coords.y > 50 ? `
                        --bottom: calc(${100 - coords.y}% + 0.5em );
                        --top: unset;
                    ` : `
                        --top: calc(${coords.y}% + 1.8em);
                        --bottom: unset;
                    `}
                    
                    align-items: center;
                    background-color: ${colors.surface};
                    bottom: var(--bottom);
                    padding: 1rem 1.3rem;
                    border-radius: 1rem;
                    colors: ${colors.onSurface};
                    left: var(--left);
                    position: absolute;
                    right: var(--right);
                    top: var(--top);
                    z-index: 3;
                }

                :global(.hot-spot__content.css-transition) {
                    opacity: 0.1;
                    transform-origin: center;
                    transform: scale(0.9);
                    transition-duration: var(--transition-duration);
                    transition-property: opacity transform;
                    transition-timing-function: ease-in;
                }

                :global(.hot-spot__content.css-transition--active) {
                    opacity: 1;
                    transform: scale(1);
                    transition-timing-function: ease-out;
                }
                
                @keyframes pulse {
                    0% {
                        transform: scale(1);
                        opacity: 0.5;
                    }
                    
                    50% {
                        opacity: 0.5;
                    }
                    
                    100% {
                        transform: scale(1.8);
                        opacity: 0;
                    }
                }                        
            `}</style>

        </div>
    )
}
