import React from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'

export type ButtonProps = {
    children: string
    color?: 'primary' | 'secondary'
    fill?: boolean
    white?: boolean
}

export const Button: Component<ButtonProps> = ({ 
    as: Button = 'button', 
    children,
    color = 'secondary',
    fill = false,
    ...props
}) => {
    const { colors } = useTheme()
    
    return (
        <Button {...props} className={classes('button', props.className, `--${color}`, ['--fill', fill])}>
            {children}

            <style jsx global>{`
                .button {
                    background-color: var(--background, transparent);
                    border-radius: 2rem;
                    border: 0 none;
                    box-shadow: inset 0 0 0 0.1rem;
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
                        box-shadow: none;
                    }

                    &.--primary {
                        --color: ${colors.primary};
                        
                        &.--fill {
                            --background: ${colors.primary};
                            --color: ${colors.onPrimary};
                            
                            &:hover {
                                --background: ${colors.primary.fade(0.2)};
                            }

                        }
                    }

                    &.--secondary {
                       --color: ${colors.secondary};

                       &.--fill {
                            --background: ${colors.secondary};
                            --color: ${colors.onSecondary};

                            &:hover {
                                --background: ${colors.secondary.fade(0.2)};
                            }
                       }
                    }

                }
            `}</style>
        </Button>
    )
}
