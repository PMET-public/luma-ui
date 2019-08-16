import React from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './Carousel.css'

export type CarouselProps = Props<{
    classes?: {
        root?: string
    }
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
    classes,
    gap = 0,
    padding = 0,
    show = 1,
    ...props
}) => {
    const { root } = defaultClasses
    const styles = { root, ...classes }

    return (
        <Element {...props} className={styles.root}
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
    classes,
    ...props
}) => {
    const { item } = defaultClasses
    const styles = { item, ...classes }

    return (
        <Element {...props} className={styles.item}>
            {children}
        </Element>
    )
}
