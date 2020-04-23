import React, { useRef, useEffect, MutableRefObject } from 'react'
import { Component } from '../../lib'
import { Root, Scroller, Item } from './Carousel.styled'
import { useMeasure } from '../../hooks/useMeasure'

export type CarouselProps = {
    gap?: number
    padding?: number
    show?: number | 'auto'
    hideScrollBar?: boolean
    snap?: boolean
    scrollerRef?: (ref: MutableRefObject<Element | null>) => any
}

export type CarouselItemProps = {}

type CompoundComponent = {
    Item: Component<CarouselItemProps>
}

export const Carousel: Component<CarouselProps> & CompoundComponent = ({ children, gap = 0, padding = 0, show = 1, hideScrollBar = false, snap = true, scrollerRef, ...props }) => {
    const rootElemRef = useRef(null)
    const scrollerElemRef = useRef(null)
    const { height } = useMeasure(rootElemRef)

    useEffect(() => {
        if (scrollerRef) scrollerRef(scrollerElemRef)
    }, [scrollerRef])

    const childrenCount = React.Children.count(children)

    return (
        <Root ref={rootElemRef} $height={!hideScrollBar ? height : undefined}>
            <Scroller ref={scrollerElemRef} $padding={childrenCount > 1 ? padding : 0} $show={show} $gap={gap} $hideScrollBar={hideScrollBar} $snap={snap} {...props}>
                {children}
            </Scroller>
        </Root>
    )
}

const CarouselItem: Component<CarouselItemProps> = ({ children, ...props }) => {
    return <Item {...props}>{children}</Item>
}

Carousel.Item = CarouselItem
