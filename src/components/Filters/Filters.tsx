import React, { useState, useRef, useEffect, ReactElement } from 'react'
import { Component, classes } from '../../lib'

import Link, { LinkRoute } from '../Link'

import ToggleIcon from '@fortawesome/fontawesome-free/svgs/solid/angle-double-down.svg'
import CheckedIcon from '@fortawesome/fontawesome-free/svgs/solid/check-circle.svg'
import CheckIcon from '@fortawesome/fontawesome-free/svgs/solid/circle.svg'

export type FiltersProps = {
    children: ReactElement<FiltersItemProps> | Array<ReactElement<FiltersItemProps>>
}

export type FiltersItemProps = {
    label: string
    link?: LinkRoute
    offset?: number
    items?: Array<{
        active?: boolean
        count?: number
        label: string
        link: LinkRoute
    }>
}

type CompoundComponent = {
    Item: Component<FiltersItemProps>
}

export const Filters: Component<FiltersProps> & CompoundComponent = ({ 
    as: Filters = 'div', 
    children,
    ...props
}) => {  
    return (
        <Filters {...props} className={classes('filters', props.className)}>
            {children}

            <style jsx global>{`
                .filters {
                    display: grid;
                    grid-gap: 4rem;
                    grid-auto-rows: max-content;
                    grid-auto-flow: row;
                }
            `}</style>
        </Filters>
    )
}

Filters.Item = ({
    as: FiltersItem = 'div', 
    label,
    link,
    offset = 5,
    items = [],
    ...props
}) => {
    const [open, setOpen] = useState(false)
    const [height, setHeight] = useState(0)
    const el = useRef<any>(null)
    const Element = link ? Link : 'span'

    useEffect(() => {
        if (!el.current) return
        setHeight(el.current.offsetHeight)
    }, [items])

    const triggerToggle = () => setOpen(!open)

    return (
        <FiltersItem {...props} className={classes('filters-item', props.className)}
            style={{
                ['--transition-duration' as any]: (items.length * 20 ) + 'ms',
                ['--height' as any]: open ? `${height / 10}rem` : `calc(2.3em * ${offset})`,
            }}
        >
            <span className={classes('filters-item__wrapper', ['--open', open])}>
                <dl className="filters-item__list" 
                    ref={el}
                >
                    <dt className="filters-item__label">
                        <Element {...link && link}>
                            {label}
                        </Element>
                    </dt>

                    {items.map((item, index) => {
                        const Element = item.link ? Link : 'span'

                        return (
                            <dd className="filters-item__item"
                                key={`filters-item__item--${index}`}
                            >
                                <Element className="filters-item__item__link" 
                                    {...item.link}
                                >
                                    {item.active ? (
                                        <CheckedIcon className="filters-item__item__check --active" />
                                    ) : (
                                        <CheckIcon className="filters-item__item__check" />
                                    )}
                                    
                                    <span className="filters-item__item__label">
                                        {item.label}
                                    </span>
                                    {item.count && (
                                        <span className="filters-item__item__count">
                                            {item.count}
                                        </span>
                                    )}
                                </Element>
                            </dd>
                        )
                    })}
                </dl>
            </span>
            
            {items.length > offset && (
                <span>
                    <button className="filters-item__toggle" 
                        type="button"
                        onClick={triggerToggle}
                    >
                        <ToggleIcon className={classes('filters-item__toggle__icon', ['--open', open])} />
                        {open ? 'Less' : 'More'}
                    </button>
                </span>
            )}

            <style jsx global>{`
                .filters-item {
                   display: grid;
                   grid-gap: 1.6rem;
                }

                .filters-item__wrapper {
                    height: auto;
                    max-height: var(--height, auto);
                    overflow: hidden;
                    transition: max-height var(--transition-duration) ease;
                }

                .filters-item__list {
                    display: grid;
                    grid-gap: 1.4rem;
                }

                .filters-item__label {
                    font-size: 1.8rem;
                    font-weight: 600;
                }

                .filters-item__item__link {
                    align-items: center;
                    display: inline-grid;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 1rem;

                    &:hover .filters-item__item__check {
                        opacity: 0.25;
                    }
                }
                
                .filters-item__item__check {
                    fill: currentColor;
                    opacity: 0.1;
                    transition: opacity 305ms ease;
                    width: 1em;

                    &.--active {
                        opacity: 1;
                    }
                }

                .filters-item__item__count {
                    filter: opacity(0.45);
                    font-size: 0.9em;
                }

                .filters-item__toggle {
                    align-items: center;
                    color: inherit;
                    cursor: pointer;
                    display: inline-flex;
                    filter: opacity(0.75);
                    font-size: 1em;
                }

                .filters-item__toggle__icon {
                    fill: currentColor;
                    height: 0.8em;
                    margin-right: 0.5rem;
                    transition: transform var(--transition-duration) ease;
                    width: 0.8em;

                    &.--open {
                        transform: rotate(180deg);
                    }
                }
            `}</style>
        </FiltersItem>
    )
}
