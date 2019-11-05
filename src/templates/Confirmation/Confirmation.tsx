import React from 'react'
import { Component, Props } from '../../lib'
import { Root, Wrapper, Title, Content, DoubleCheckIcon, ShoppingIcon, GraphicWrapper } from './Confirmation.styled'

export type ConfirmationProps = {
    title: Props<{ text: string }>
}

export const Confirmation: Component<ConfirmationProps> = ({ title, children, ...props }) => {
    return (
        <Root {...props}>
            <Wrapper>
                <div>
                    <GraphicWrapper>
                        <DoubleCheckIcon />
                        <ShoppingIcon />
                    </GraphicWrapper>
                </div>
                <Title {...title}>{title.text}</Title>
                {children && <Content>{children}</Content>}
            </Wrapper>
        </Root>
    )
}
