import React, { createContext, useState, useContext, useCallback } from 'react'
import { Component } from '../../lib'
import { Root, ImageWrapper, Item, Button, Content } from './HotSpots.styled'

import { useTransition, animated } from 'react-spring'

import Image, { ImageProps } from '../Image'

export type HotSpotsProps = {
    description: string
    image: ImageProps
    items?: HotSpotItemProps[]
}

export type HotSpotItemProps = {
    coords: { x: number; y: number }
    id: string
    label: string
}

type CompoundComponent = {
    Item: Component<HotSpotItemProps>
}

export const HotSpotsContext = createContext<{
    active: null | string
    set: React.Dispatch<React.SetStateAction<null | string>>
}>({
    active: null,
    set: () => {},
})

export const HotSpots: Component<HotSpotsProps> & CompoundComponent = ({ children, description, image, items, ...props }) => {
    const [active, set] = useState<string | null>(null)

    return (
        <HotSpotsContext.Provider value={{ active, set }}>
            <Root {...props}>
                <ImageWrapper>
                    <Image {...image} />
                </ImageWrapper>

                {items ? items.map((item, index) => <HotSpots.Item key={index} {...item} />) : children}
            </Root>
        </HotSpotsContext.Provider>
    )
}

const HotSpotsItem: Component<HotSpotItemProps> = ({ children, coords, id, label, ...props }) => {
    const context = useContext(HotSpotsContext)

    const active = id === context.active

    const transitions = useTransition(active, null, {
        from: { opacity: 0, transform: 'scale(0.9)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.9)' },
    })

    const handleToggle = useCallback(() => {
        if (children) context.set(active ? null : id)
    }, [children])

    return (
        <Item {...props}>
            <Button $active={active} $xPos={coords.x} $yPos={coords.y} aria-label={label} as="button" onClick={handleToggle} tabIndex={0} />

            {children && (
                <Content $xPos={coords.x} $yPos={coords.y}>
                    {transitions.map(
                        ({ item, key, props }) =>
                            item && (
                                <animated.div key={key} style={props}>
                                    {children}
                                </animated.div>
                            )
                    )}
                </Content>
            )}
        </Item>
    )
}

HotSpots.Item = HotSpotsItem
