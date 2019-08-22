import React, { FunctionComponent, createContext, useState, useContext } from 'react'
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
    Item: FunctionComponent<HotSpotItemProps>
}

export const HotSpotsContext = createContext({ active: null, set: (id: string | number | null) => {} })

export const HotSpots: FunctionComponent<HotSpotsProps> & CompoundComponent = ({
    children,
    description,
    image,
    items,
    ...props
}) => {
    const [active, setActive] = useState()

    const set = (id?: string | number | null) => {
        setActive(id)
    }

    return (
        <HotSpotsContext.Provider value={{ active, set }}>
            <Root {...props}>
                <ImageWrapper>
                    <Image transition {...image} />
                </ImageWrapper>

                {items ? items.map((item, index) => <HotSpots.Item key={index} {...item} />) : children}
            </Root>
        </HotSpotsContext.Provider>
    )
}

HotSpots.Item = ({ children, coords, id, label, ...props }) => {
    const context = useContext(HotSpotsContext)

    const active = id === context.active

    const transitions = useTransition(active, null, {
        from: { opacity: 0, transform: 'scale(0.9)' },
        enter: { opacity: 1, transform: 'scale(1)' },
        leave: { opacity: 0, transform: 'scale(0.9)' },
    })

    const handleToggle = () => {
        if (children) context.set(active ? null : id)
    }

    return (
        <Item {...props}>
            <Button
                $active={active}
                $xPos={coords.x}
                $yPos={coords.y}
                aria-label={label}
                as="button"
                onClick={handleToggle}
                tabIndex={0}
            />

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
