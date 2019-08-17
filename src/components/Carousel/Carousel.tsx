import React from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './Carousel.css'

export type CarouselProps = Props<{
    gap?: number
    padding?: number
    show?: number
}>

export type CarouselItemProps = Props<{
    classes?: {
        item?: string
    }
}>

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
        <Element
            className={styles.root}
            {...props}
            style={{
                ['--padding' as any]: `${padding}rem`,
                ['--show' as any]: show,
                ['--gap' as any]: `${gap}rem`,
                ['--itemWidth' as any]: `calc(100% / var(--show) - var(--padding))`,
            }}
        >
            {children}
        </Element>
    )
}

Carousel.Item = ({
    children,
    ...props
}) => {

    return (
        <Element className={styles.item} {...props}>
            {children}
        </Element>
    )
}
