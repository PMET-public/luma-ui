import React, { createContext, ReactNode, useState } from 'react'
import { Component, Props, Element } from '../../lib'
import styles from './HotSpots.css'

import Image, { ImageProps } from '../Image'
import { HotSpotsItem, HotSpotItemProps } from './HotSpots.Item'



export type HotSpotsProps = Props<{
    children: ReactNode
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
    description,
    image,
    items,
    ...props
}) => {
   

    const [active, setActive] = useState()

    const set = (id?: string|number|null) => {
        setActive(id)
    }

    return (
        <HotSpotsContext.Provider value={{ active, set }}>
            <Element className={styles.root} {...props}>
                <Image 
                    className={styles.image}
                    transition 
                    {...image} 
                />

                {items ? items.map((item, index) => (
                    <HotSpots.Item 
                        key={index} 
                        {...item}
                    />
                )) : children}
            </Element>
        </HotSpotsContext.Provider>
    )
}

HotSpots.Item = HotSpotsItem
