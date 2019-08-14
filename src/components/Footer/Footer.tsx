import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

export type FooterProps = Props<{ }>

export const Footer: Component<FooterProps> = ({ 
    children,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Element {...props} className={classes('footer', props.className)}>
            {children}

            <style jsx global>{`
                .footer {     
                    background: ${colors.background};  
                    color: ${colors.onBackground};  
                    font-size: 1.3rem;
                    padding: 3rem;

                    & a:hover {
                        opacity: 0.5;
                    }
                }
            `}</style>
        </Element>
    )
}
