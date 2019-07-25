import React, { createContext, useState, ReactNode, useContext, useRef, useEffect, ReactElement } from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useMeasure } from '../../hooks/useMeasure'
import { animated, useSpring } from 'react-spring'
import { useTheme } from '../../theme'

import ArrowIcon from '@fortawesome/fontawesome-free/svgs/solid/angle-down.svg'

const Context = createContext({ active: -1, setActive: (id: number) => {} })

export type AccordionItemProps = Props<{
    _id?: number
    active?: boolean
    label: ReactNode | string
}>

export type AccordionProps = Props<{
    items?: AccordionItemProps[]
    selected?: number
}>

type CompoundComponent = {
    Item: Component<AccordionItemProps>
}

export const Accordion: Component<AccordionProps> & CompoundComponent = ({ 
    children,
    items,
    selected = 0,
    ...props
}) => {
    const [active, setActive] = useState(selected)

    return (
        <Element {...props} className={classes('accordion', props.className)}>
            <Context.Provider value={{ active, setActive }}>
                {items ? items.map((item, index) => (
                    <Accordion.Item 
                        key={index} 
                        active={active === index} 
                        _id={index} 
                        {...item} 
                    />
                )) : React.Children.map(children, (child, index) => {
                    return React.cloneElement(child as ReactElement<AccordionItemProps>, { active: active === index, _id: index })
                })}
            </Context.Provider>

            <style jsx global>{`
                .accordion {
                    display: grid;
                }
            `}</style>
        </Element>
    )
}

Accordion.Item = ({ 
    active = false,
    children,
    _id = -1,
    label,
    ...props
}) => {    
    const wrapperElemRef = useRef(null)

    const { colors } = useTheme()

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
        <Element {...props} className={classes('accordion-item', props.className)}>
            <button className={classes('accordion-item__button', ['--active', active])}
                type="button"
                onClick={triggerActivate}
            >
                <div className="accordion-item__button__label">
                    {label}
                </div>
                <ArrowIcon className="accordion-item__button__icon" />
            </button>

            <animated.div style={{ overflow: 'hidden', ...transition }}>
                <div className="accordion-item__content"
                    ref={wrapperElemRef}
                >
                    {children}
                </div>
            </animated.div>

            <style jsx global>{`
                .accordion-item {
                    border-bottom-width: 0.1rem;
                    border-color: ${colors.onSurface.fade(0.87)};
                    border-style: solid;
                    display: grid;
                    grid-auto-columns: 1fr;
                    grid-auto-rows: minmax(max-content, max-content);

                    &:first-of-type {
                        border-top-width: 0.1rem;
                    }
                }

                .accordion-item__button {
                    align-items: center;
                    color: inherit;
                    cursor: pointer;
                    display: flex;
                    font-size: 1em;
                    padding: 2rem;
                    text-align: left;
                    width: 100%;

                    &.--active {
                        & .accordion-item__button__icon {
                            transform: rotateX(180deg);
                        }
                    }
                }

                .accordion-item__button__label {
                    flex-grow: 1;
                }

                .accordion-item__button__icon {
                    fill: currentColor;
                    transition: transform 305ms ease-out;
                    width: 1.6rem;
                }

                .accordion-item__content {
                    padding: 1rem 2rem 4rem;
                }
            `}</style>
        </Element>
    )
}
