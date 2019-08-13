import React from 'react'
import { Container, Component, Props, Element, classes } from '../../lib'
import { useTheme } from '../../theme'

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
                    background: ${colors.background};  
                    color: ${colors.onBackground};  

                    & a:hover {
                        opacity: 0.5;
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
