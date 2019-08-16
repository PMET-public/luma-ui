import React, { createContext, useState, useContext, useRef, ReactElement } from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './Accordion.css'

import { useMeasure } from '../../hooks/useMeasure'
import { animated, useSpring } from 'react-spring'

import ArrowIcon from '@fortawesome/fontawesome-free/svgs/solid/angle-down.svg'

const Context = createContext({ active: -1, setActive: (id: number) => {} })

export type AccordionItemProps = Props<{
    _id?: number
    active?: boolean
    classes?: typeof defaultClasses
    label: Props
}>

export type AccordionProps = Props<{
    classes?: typeof defaultClasses
    items?: AccordionItemProps[]
    selected?: number
}>

type CompoundComponent = {
    Item: Component<AccordionItemProps>
}

export const Accordion: Component<AccordionProps> & CompoundComponent = ({ 
    children,
    classes,
    items,
    selected = 0,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    const [active, setActive] = useState(selected)

    return (
        <Element {...props} className={styles.root}>
            <Context.Provider value={{ active, setActive }}>
                {items ? items.map((item, index) => (
                    <Accordion.Item 
                        {...item} 
                        _id={index} 
                        active={active === index} 
                        key={index} 
                    />
                )) : React.Children.map(children, (child, index) => {
                    return React.cloneElement(child as ReactElement<AccordionItemProps>, { active: active === index, _id: index })
                })}
            </Context.Provider>
        </Element>
    )
}

Accordion.Item = ({ 
    _id = -1,
    active = false,
    children,
    classes,
    label,
    ...props
}) => {    
    const styles = { ...defaultClasses, classes }

    const wrapperElemRef = useRef(null)

    const { height } = useMeasure(wrapperElemRef)

    const transition = useSpring(active ? { 
        height,
        opacity: 1, 
    } : {
        height: 0,
        opacity: 0,
    })

    const { setActive } = useContext(Context)

    const triggerActivate = () => {
        setActive(active ? -1 : _id)
    }

    return (
        <Element {...props} className={styles.item}>
            <button 
                className={classNames(styles.button, [styles.active, active])}
                type="button"
                onClick={triggerActivate}
            >
                <Element {...label} className={styles.buttonLabel} />
                <ArrowIcon className="accordion-item__button__icon" />
            </button>

            <animated.div style={{ overflow: 'hidden', ...transition }}>
                <div 
                    className={styles.content}
                    ref={wrapperElemRef}
                >
                    {children}
                </div>
            </animated.div>
        </Element>
    )
}
