import React, { ReactNode } from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type ButtonProps = {
    fill?: boolean
    color?: 'primary' | 'secondary',
    label?: ReactNode
}

export const Button: Component<ButtonProps> = ({ 
    as: Button = 'button', 
    children,
    color,
    fill = false,
    label = null,
    ...props
}) => {
    const { colors } = useTheme()
    
    return (
        <Button {...props} className={classes('button', props.className, `--${color}`, ['--fill', fill])}>
            <span className="button__wrapper">
                {label || children}
            </span>

            <style jsx global>{`
                .button {
                    --color: inherit;

                    background-color: var(--background, transparent);
                    border-radius: 2rem;
                    border: 0.1rem solid;
                    color: var(--color);
                    cursor: pointer;
                    font-size: 1.6rem;
                    font-weight: 600;
                    line-height: 1;
                    padding: 1.2rem 2.8rem;
                    transition: all 305ms ease;

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
        </Button>
    )
}
