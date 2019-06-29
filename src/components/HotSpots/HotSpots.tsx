import React, { createContext, ReactNode, useState, useContext } from 'react'
import { Component, classes } from '../../lib'
import Image from '../Image'
import { useTheme } from '../../theme'
import { useTransition, animated } from 'react-spring'

export type HotSpotsProps = {
    children: ReactNode
    description: string
    image: string
}

export type HotSpotItemProps = {
    children?: ReactNode
    coords: { x: number, y: number }
    id: string | number
    label: string
}

type CompoundComponent = {
    Item: Component<HotSpotItemProps>
}

const HotSpotsContext = createContext({ active: null, set: (id: string|number|null) => {}})

export const HotSpots: Component<HotSpotsProps> & CompoundComponent = ({
    as: HotSpots = 'div',
    children,
    description,
    image,
    ...props
}) => {
    const [active, setActive] = useState()

    const set = (id?: string|number|null) => {
        setActive(id)
    }

    return (
        <HotSpotsContext.Provider value={{ active, set }}>
            <HotSpots {...props} className={classes('hot-spots', props.className)}>
                <Image src={image} alt={description} />
                {children}
            </HotSpots>

            <style jsx global>{`
                .hot-spots {
                    position: relative;
                }

                .hot-spots :global(.image) {
                    width: 100%;
                    z-index: 0;
                }
            `}</style>
        </HotSpotsContext.Provider>
    )
}

HotSpots.Item = ({
    as: HotSpotsItem = 'div',
    children,
    coords,
    id,
    label,
    ...props
}) => {
    const { colors } = useTheme()
    const context = useContext(HotSpotsContext)
    const isActive = id === context.active
    const transitions = useTransition(isActive, null, {
        from: { opacity: 0, transform: 'scale(0.9)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.9)' },
    })

    const handleToggle = () => {
        context.set(isActive ? null : id)
    }

    return (
        <HotSpotsItem {...props} className={classes('hot-spot', props.className)}>
            <button className="hot-spot__button"
                aria-label={label}
                onClick={handleToggle}
                tabIndex={0}
                type="button"
            ></button>

            {transitions.map(({ item, key, props}) => item && (
                <animated.div className="hot-spot__content" key={key} style={props}>
                    {children}
                </animated.div>
            ))}

            <style jsx global>{`
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

                .hot-spot :global(.hot-spot__content) {
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
        </HotSpotsItem>
    )
}
