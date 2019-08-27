import React, { FunctionComponent, createContext, useState, useContext, useRef, ReactElement } from 'react'
import { Root, Item, Button, ButtonLabel, ButtonIcon, Content } from './Accordion.styled'

import { useMeasure } from '../../hooks/useMeasure'
import { animated, useSpring } from 'react-spring'

import ArrowIconSvg from 'remixicon/icons/System/arrow-down-s-line.svg'

export type AccordionProps = {
    items?: AccordionItemProps[]
    selected?: number
}

export type AccordionItemProps = {
    _id?: number
    active?: boolean
    label: string
}

const Context = createContext({ active: -1, setActive: (id: number) => {} })

type CompoundComponent = {
    Item: FunctionComponent<AccordionItemProps>
}

export const Accordion: FunctionComponent<AccordionProps> & CompoundComponent = ({
    children,
    items,
    selected = 0,
    ...props
}) => {
    const [active, setActive] = useState(selected)

    return (
        <Root {...props}>
            <Context.Provider value={{ active, setActive }}>
                {items
                    ? items.map((item, index) => (
                          <Accordion.Item _id={index} active={active === index} key={index} {...item} />
                      ))
                    : React.Children.map(children, (child, index) => {
                          return React.cloneElement(child as ReactElement<AccordionItemProps>, {
                              active: active === index,
                              _id: index,
                          })
                      })}
            </Context.Provider>
        </Root>
    )
}

Accordion.Item = ({ _id = -1, active = false, children, label, ...props }) => {
    const wrapperElemRef = useRef(null)

    const { height } = useMeasure(wrapperElemRef)

    const { setActive } = useContext(Context)

    const transition = useSpring(
        active
            ? {
                  height,
                  opacity: 1,
              }
            : {
                  height: 0,
                  opacity: 0,
              }
    )

    const triggerActivate = () => {
        setActive(active ? -1 : _id)
    }

    return (
        <Item {...props}>
            <Button type="button" onClick={triggerActivate}>
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
