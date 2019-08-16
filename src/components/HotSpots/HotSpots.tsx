import React, { createContext, ReactNode, useState } from 'react'
import { Component, Props, Element } from '../../lib'
import defaultClasses from './HotSpots.css'

import Image, { ImageProps } from '../Image'
import { HotSpotsItem, HotSpotItemProps } from './HotSpots.Item'

export type HotSpotsProps = Props<{
    children: ReactNode
    classes?: typeof defaultClasses
    description: string
    image: ImageProps
    items?: HotSpotItemProps[]
}>

type CompoundComponent = {
    Item: Component<HotSpotItemProps>
}

export const HotSpotsContext = createContext({ active: null, set: (id: string|number|null) => {}})

export const HotSpots: Component<HotSpotsProps> & CompoundComponent = ({
    children,
    classes,
    description,
    image,
    items,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    const [active, setActive] = useState()

    const set = (id?: string|number|null) => {
        setActive(id)
    }

    return (
        <HotSpotsContext.Provider value={{ active, set }}>
            <Element {...props} className={styles.root}>

                <Image 
                    {...image} 
                    classes={{
                        root: styles.image,
                    }}
                    transition 
                />

                {items ? items.map((item, index) => (
                    <HotSpots.Item 
                        {...item}
                        key={index} 
                    />
                )) : children}
            </Element>
        </HotSpotsContext.Provider>
    )
}

HotSpots.Item = HotSpotsItem
