import React, { createContext, useState, useContext, useRef, useEffect } from 'react'
import { Component } from '../../lib'
import { Root, Item, Button, ButtonLabel, ButtonIcon, Content } from './Accordion.styled'

import { useMeasure } from '../../hooks/useMeasure'
import { animated, useSpring } from 'react-spring'
import { easeCircle as easing } from 'd3-ease'

import ArrowIconSvg from 'remixicon/icons/System/arrow-down-s-line.svg'

export type AccordionProps = {
    defaultSelected?: number
}

export type AccordionItemProps = {
    label: string
}

const ItemContext = createContext({ index: 0, active: false, onSelect: () => {} })

type CompoundComponent = {
    Item: Component<AccordionItemProps>
}

export const Accordion: Component<AccordionProps> & CompoundComponent = ({ children, defaultSelected = -1, ...props }) => {
    const [selected, setSelected] = useState(defaultSelected)

    /** Update Selected when prop changes */
    useEffect(() => {
        setSelected(defaultSelected)
    }, [defaultSelected])

    return (
        <Root {...props}>
            {React.Children.map(children, (child, index) => {
                const active = selected === index
                const onSelect = () => setSelected(selected === index ? -1 : index)

                return (
                    <ItemContext.Provider key={index} value={{ index, active, onSelect }}>
                        {child}
                    </ItemContext.Provider>
                )
            })}
        </Root>
    )
}

const AccordionItem: Component<AccordionItemProps> = ({ children, label, ...props }) => {
    const wrapperElemRef = useRef(null)

    const { height } = useMeasure(wrapperElemRef)

    const { active, onSelect } = useContext(ItemContext)

    const transition = useSpring({
        config: {
            duration: 500,
            easing,
        },
        ...(active
            ? {
                  height,
                  opacity: 1,
              }
            : {
                  height: 0,
                  opacity: 0,
              }),
    })

    return (
        <Item {...props}>
            <Button type="button" onClick={onSelect}>
                <ButtonLabel>{label}</ButtonLabel>
                <ButtonIcon $active={active}>
                    <ArrowIconSvg />
                </ButtonIcon>
            </Button>

            <animated.div style={{ overflow: 'hidden', position: 'relative', ...transition }}>
                <Content ref={wrapperElemRef}>{children}</Content>
            </animated.div>
        </Item>
    )
}

Accordion.Item = AccordionItem
