import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

export type LoaderProps = Props<{ 
    label: string
}>

export const Loader: Component<LoaderProps> = ({ 
    label,
    ...props
}) => {
    const { colors } = useTheme()
    return (
        <Element {...props} className={classes('loader', props.className)}
            aria-label={label}
        >
            <span className="loader__dot"></span>
            <span className="loader__dot"></span>
            <span className="loader__dot"></span>

            <style jsx global>{`
                .loader {
                    --duration: 600ms;
                    display: grid;
                    font-size: 1rem;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 0.5em;
                    justify-content: center;
                }

                .loader__dot {
                    width: 1em;
                    height: 1em;
                
                    border-radius: 50%;
                    background-color: ${colors.primary.fade(0.6)};
                
                    transform-origin: 50%;
                    animation-duration: var(--duration);
                    animation-name: loader__animation;
                    animation-iteration-count: infinite;
                    animation-timing-function: linear;

                    & + .loader__dot {
                        animation-delay: calc(var(--duration) * 0.25);

                        & + .loader__dot {
                            animation-delay: calc(var(--duration) * 0.5);
                        }
                    }
                }

                @keyframes loader__animation {
                    0%{
                        transform: translateY(0%) scale(1);
                    }
                    30%{
                        transform: translateY(-25%) scale(1);
                    }
                    50%{
                        transform: translateY(0%) scale(1);
                    }
                    70%{
                        transform: translateY(25%) scale(1, 0.9);
                    }
                }
            `}</style>
        </Element>
    )
}
