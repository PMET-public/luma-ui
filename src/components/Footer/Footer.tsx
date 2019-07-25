import React from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'
import Container from '../Container'

export type FooterProps = Props<{ }>

export const Footer: Component<FooterProps> = ({ 
    children,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Element {...props} className={classes('footer', props.className)}>
            <Container className="footer__container">
                {children}
            </Container>

            <style jsx global>{`
                .footer {     
                    background: ${colors.onSurface.fade};  
                    color: ${colors.onSurface.fade(0.25)};  

                    & a:hover {
                        filter: opacity(0.5);
                    }
                }

                .footer__container {
                    font-size: 1.3rem;
                    padding: 3rem;
                }
            `}</style>
        </Element>
    )
}
