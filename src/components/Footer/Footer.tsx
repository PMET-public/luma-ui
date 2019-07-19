import React from 'react'
import { Component, classes } from '../../lib'
import { useTheme } from '../../theme'
import Container from '../Container'

export type FooterProps = {

}

export const Footer: Component<FooterProps> = ({ 
    as: Footer = 'div', 
    children,
    ...props
}) => {
    const { colors } = useTheme()

    return (
        <Footer {...props} className={classes('footer', props.className)}>
            <Container className="footer__container">
                {children}
            </Container>

            <style jsx global>{`
                .footer {     
                    background: ${colors.surface};  
                    color: ${colors.onSurface.fade(0.3)};  

                    & a:hover {
                        filter: opacity(0.75);
                    }
                }

                .footer__container {
                    font-size: 1.3rem;
                    padding: 3rem;
                }
            `}</style>
        </Footer>
    )
}
