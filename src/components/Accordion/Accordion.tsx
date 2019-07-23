import React, { createContext, useState, ReactNode, useContext, useRef } from 'react'
import { Component, classes } from '../../lib'
import { useMeasure } from '../../hooks/useMeasure'
import { animated, useSpring } from 'react-spring'
import { useTheme } from '../../theme'
import { ReactComponentLike } from 'prop-types'

import ArrowIcon from '@fortawesome/fontawesome-free/svgs/solid/angle-down.svg'

const Context = createContext([ -1, (id: number) => {} ])

export type AccordionProps = {
    children: ReactNode[]
    init?: number
}

export type AccordionItemProps = {
    active?: boolean
    _id?: number
    label: ReactNode | string
    labelAs?: ReactComponentLike
}

type CompoundComponent = {
    Item: Component<AccordionItemProps>
}

export const Accordion: Component<AccordionProps> & CompoundComponent = ({ 
    as: Accordion = 'div', 
    children,
    init = 0,
    ...props
}) => {
    const [active, setActive] = useState(init)

    return (
        <Accordion {...props} className={classes('accordion', props.className)}>
            <Context.Provider value={[ active, setActive ]}>
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { active: active === index, _id: index })
                })}
            </Context.Provider>

            <style jsx global>{`
                .accordion {
                    display: grid;
                }
            `}</style>
        </Accordion>
    )
}

Accordion.Item = ({ 
    as: AccordionItem = 'div', 
    active = false,
    children,
    _id,
    label,
    labelAs: Label = 'h3',
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

    const [, setActive] = useContext(Context)

    const triggerActivate = () => {
        setActive(active ? -1 : _id)
    }

    return (
        <AccordionItem {...props} className={classes('accordion-item', props.className)}>
            <button className={classes('accordion-item__button', ['--active', active])}
                type="button"
                onClick={triggerActivate}
            >
                <Label className="accordion-item__button__label">
                    {label} | {height}
                </Label>

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
                    border-color: ${colors.onSurface.fade(0.75)};
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
                            transform: rotate(180deg);
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
        </AccordionItem>
    )
}
