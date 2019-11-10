import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, Title, Content, DoubleCheckIcon, ShoppingIcon, GraphicWrapper } from './CartLanding.styled'

export type CartLandingProps = {
    title: Props<{ text: string }>
    success?: boolean
}

export const CartLanding: Component<CartLandingProps> = ({ success, title, children, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                <div>
                    <GraphicWrapper>
                        {success && <DoubleCheckIcon />}
                        <ShoppingIcon />
                    </GraphicWrapper>
                </div>
                <Title {...title}>{title.text}</Title>
                {children && <Content>{children}</Content>}
            </Wrapper>
        </Root>
    )
}
