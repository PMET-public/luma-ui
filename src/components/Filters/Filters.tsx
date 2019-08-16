import React, { useState, useRef } from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './Filters.css'

import { useMeasure } from '../../hooks/useMeasure'

import ToggleIcon from '@fortawesome/fontawesome-free/svgs/solid/angle-double-down.svg'
import CheckedIcon from '@fortawesome/fontawesome-free/svgs/solid/check-circle.svg'
import CheckIcon from '@fortawesome/fontawesome-free/svgs/solid/circle.svg'

export type FiltersProps = Props<{
    classes?: typeof defaultClasses
    groups: FiltersGroupProps[]
}>

export const Filters: Component<FiltersProps> = ({
    classes,
    groups = [],
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    return (
        <Element {...props} className={styles.root}>
            {groups.map((group, index) => (
                <FiltersGroup
                    {...group}
                    classes={classes}
                    key={index}
                />
            ))}
        </Element>
    )
}

type FiltersGroupProps = Props<{
    classes?: any
    title: Props
    offset?: number
    items: Array<Props<{
        _id?: string | number
        active?: boolean
        count?: number
        text: string
    }>>
}>

const FiltersGroup: Component<FiltersGroupProps> = ({
    classes,
    items = [],
    offset = 5,
    title,
    ...props
}) => {
    const styles = { ...defaultClasses, ...classes }

    const [open, setOpen] = useState(false)

    const elRef = useRef<any>(null)

    const { height } = useMeasure(elRef)

    const triggerToggle = () => setOpen(!open)

    return (
        <Element {...props} className={styles.group}
            style={{
                ['--transition-duration' as any]: (items.length * 20) + 'ms',
                ['--height' as any]: open ? `${height / 10}rem` : `calc(2.3em * ${offset})`,
            }}
        >
            <span className={styles.groupWrapper}>
                <dl className={styles.groupList}
                    ref={elRef}
                >
                    <dt>
                        <Element {...title} className={styles.groupLabel} />
                    </dt>

                    {items.map(({ text, count, active = false, _id, ...item }, index) => (
                        <dd key={_id || index}>
                            <Element
                                as="span"
                                {...item}
                                className={styles.groupItem}
                            >
                                {active ? (
                                    <CheckedIcon className={classNames(styles.groupItemCheck, styles.groupItemCheckActive)} />
                                ) : (
                                    <CheckIcon className={classNames(styles.groupItemCheck)} />
                                )}

                                <span className={styles.groupItemLabel}>
                                    {text}
                                </span>

                                {count && (
                                    <span className={styles.groupItemCount}>
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
                    <button className={styles.groupToggle}
                        type="button"
                        onClick={triggerToggle}
                    >
                        <ToggleIcon
                            className={classNames(styles.groupToggleIcon, [styles.groupToggleIconOpen, open])}
                        />
                        {open ? 'Less' : 'More'}
                    </button>
                </span>
            )}
        </Element>
    )
}
