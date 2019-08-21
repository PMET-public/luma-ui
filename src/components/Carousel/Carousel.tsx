import React from 'react'
import { Component } from '../../lib'
import { Root, Item } from './Carousel.styled'

export type CarouselProps = {
    gap?: number
    padding?: number
    show?: number
}

export type CarouselItemProps = {
    classes?: {
        item?: string
    }
}

type CompoundComponent = {
    Item: Component<CarouselItemProps>
}

export const Carousel: Component<CarouselProps> & CompoundComponent = ({
    children,
    gap = 0,
    padding = 0,
    show = 1,
    ...props
}) => {
    return (
        <Root padding={padding} show={show} gap={gap} {...props}>
            {children}
        </Root>
    )
}

Carousel.Item = ({ children, ...props }) => {
    return <Item {...props}>{children}</Item>
}
