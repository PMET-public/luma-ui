import React, { ReactNode } from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

export type ButtonProps = Props<{
    fill?: boolean
    color?: 'primary' | 'secondary',
    label?: ReactNode | string
}>

export const Button: Component<ButtonProps> = ({ 
    children,
    color,
    fill = false,
    label = children,
    ...props
}) => {
    const { colors } = useTheme()
    
    return (
        <Element {...props} className={classes('button', props.className, `--${color}`, ['--fill', fill])}>
            <span className="button__wrapper">
                {label}
            </span>

            <style jsx global>{`
                .button {
                    --color: inherit;

                    align-items: center;
                    background-color: var(--background, transparent);
                    border-radius: 2.4rem;
                    border: 0.1rem solid;
                    color: var(--color);
                    cursor: pointer;
                    display: inline-flex;
                    font-size: 1.6rem;
                    font-weight: 600;
                    justify-content: center;
                    line-height: 1;
                    padding: 1.6rem 2.8rem;
                    transition-duration: 305ms;
                    transition-property: opacity, color, background-color;
                    transition-timing-function: ease;

                    &[href] {
                        text-decoration: none !important;
                        color: var(--color);
                    }

                    &.--fill {
                        background-color: currentColor;

                        &:hover {
                            opacity: 0.83;
                        }

                        & .button__wrapper {
                            filter: invert(1);
                        }
                    }

                    &.--primary {
                        --color: ${colors.primary};
                    }

                    &.--secondary {
                        --color: ${colors.secondary};
                    }
                }
            `}</style>
        </Element>
    )
}
