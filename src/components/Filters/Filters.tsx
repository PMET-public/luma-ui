import React, { useState, useRef } from 'react'
import { Component, Props, Element, classes } from '../../lib'
import { useMeasure } from '../../hooks/useMeasure'

import ToggleIcon from '@fortawesome/fontawesome-free/svgs/solid/angle-double-down.svg'
import CheckedIcon from '@fortawesome/fontawesome-free/svgs/solid/check-circle.svg'
import CheckIcon from '@fortawesome/fontawesome-free/svgs/solid/circle.svg'

export type FiltersItemProps = Props<{
    active?: boolean
    count?: number
    text: string
}>

export type FiltersGroupProps = Props<{
    title: Props
    offset?: number
    items: FiltersItemProps[]
}>

export type FiltersProps = Props<{
    groups?: FiltersGroupProps[]
}>

type CompoundComponent = {
    Group: Component<FiltersGroupProps>
}

export const Filters: Component<FiltersProps> & CompoundComponent = ({
    groups,
    children,
    ...props
}) => {
    return (
        <Element {...props} className={classes('filters', props.className)}>
            {groups ? groups.map((group, index) => (
                <Filters.Group key={index} 
                    {...group} 
                />
            )) : children}

            <style jsx global>{`
                .filters {
                    display: grid;
                    grid-gap: 4rem;
                    grid-auto-rows: max-content;
                    grid-auto-flow: row;
                }
            `}</style>
        </Element>
    )
}

Filters.Group = ({
    title,
    offset = 5,
    items = [],
    ...props
}) => {
    const [open, setOpen] = useState(false)

    const elRef = useRef<any>(null)

    const { height } = useMeasure(elRef)

    const triggerToggle = () => setOpen(!open)

    return (
        <Element {...props} className={classes('filters-group', props.className)}
            style={{
                ['--transition-duration' as any]: (items.length * 20) + 'ms',
                ['--height' as any]: open ? `${height / 10}rem` : `calc(2.3em * ${offset})`,
            }}
        >
            <span className={classes('filters-group__wrapper', ['--open', open])}>
                <dl className="filters-group__list"
                    ref={elRef}
                >
                    <dt>
                        <Element {...title} className={classes('filters-group__label', title.className)} />
                    </dt>

                    {items.map(({text, count, active = false, ...item}, index) => (
                        <dd key={index}>
                            <Element 
                                as="span" 
                                {...item} 
                                className={classes('filters-group__item', item.className)}
                            >
                                {active ? (
                                    <CheckedIcon className="filters-group__item__check --active" />
                                ) : (
                                    <CheckIcon className="filters-group__item__check" />
                                )}

                                <span className="filters-group__item__label">
                                    {text}
                                </span>

                                {count && (
                                    <span className="filters-group__item__count">
                                        {count}
                                    </span>
                                )}
                            </Element>
                        </dd>
                    ))}
                </dl>
            </span>

            {items.length > offset && (
                <span>
                    <button className="filters-group__toggle"
                        type="button"
                        onClick={triggerToggle}
                    >
                        <ToggleIcon className={classes('filters-group__toggle__icon', ['--open', open])} />
                        {open ? 'Less' : 'More'}
                    </button>
                </span>
            )}

            <style jsx global>{`
                .filters-group {
                   display: grid;
                   grid-gap: 1.6rem;
                }

                .filters-group__wrapper {
                    height: auto;
                    max-height: var(--height, auto);
                    overflow-y: hidden;
                    transition: max-height var(--transition-duration) ease;
                }

                .filters-group__list {
                    display: grid;
                    grid-gap: 1.4rem;
                }

                .filters-group__label {
                    font-size: 1.8rem;
                    font-weight: 600;
                }

                .filters-group__toggle {
                    align-items: center;
                    color: inherit;
                    cursor: pointer;
                    display: inline-flex;
                    filter: opacity(0.75);
                    font-size: 1em;
                }

                .filters-group__toggle__icon {
                    fill: currentColor;
                    height: 0.8em;
                    margin-right: 0.5rem;
                    transition: transform var(--transition-duration) ease;
                    width: 0.8em;

                    &.--open {
                        transform: rotate(180deg);
                    }
                }

                .filters-group__item {
                    align-items: center;
                    display: inline-grid;
                    grid-auto-columns: max-content;
                    grid-auto-flow: column;
                    grid-gap: 1rem;

                    &:hover .filters-group__item__check {
                        opacity: 0.25;
                    }
                }
                
                .filters-group__item__check {
                    fill: currentColor;
                    opacity: 0.1;
                    transition: opacity 305ms ease;
                    width: 1em;

                    &.--active {
                        opacity: 1;
                    }
                }

                .filters-group__item__count {
                    filter: opacity(0.45);
                    font-size: 0.9em;
                }
            `}</style>
        </Element>
    )
}
