import React, { useState, useRef } from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './Filters.css'

import useStyles from 'isomorphic-style-loader/useStyles'
import { useMeasure } from '../../hooks/useMeasure'

import ToggleIcon from '@fortawesome/fontawesome-free/svgs/solid/angle-double-down.svg'
import CheckedIcon from '@fortawesome/fontawesome-free/svgs/solid/check-circle.svg'
import CheckIcon from '@fortawesome/fontawesome-free/svgs/solid/circle.svg'

export type FiltersProps = Props<{
    groups: FiltersGroupProps[]
}>

export const Filters: Component<FiltersProps> = ({
    groups = [],
    ...props
}) => {
    useStyles(styles)

    return (
        <Element className={styles.root} {...props}>
            {groups.map((group, index) => (
                <FiltersGroup
                    key={index}
                    {...group}
                />
            ))}
        </Element>
    )
}

type FiltersGroupProps = Props<{
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
    items = [],
    offset = 5,
    title,
    ...props
}) => {

    useStyles(styles)

    const [open, setOpen] = useState(false)

    const elRef = useRef<any>(null)

    const { height } = useMeasure(elRef)

    const triggerToggle = () => setOpen(!open)

    return (
        <Element className={styles.group} {...props}>
            <div 
                className={styles.groupWrapper}
                style={{
                    ['--transition-duration' as any]: (items.length * 20) + 'ms',
                    ['--height' as any]: open ? `${height / 10}rem` : `calc(2.2em * ${offset})`,
                }}
            >
                <dl className={styles.groupList} ref={elRef}>
                    <dt>
                        <Element className={styles.groupLabel} {...title} />
                    </dt>

                    {items.map(({ text, count, active = false, _id, ...item }, index) => (
                        <dd key={_id || index}>
                            <Element
                                as="span"
                                className={styles.groupItem}
                                {...item}
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
            </div>

            {items.length > offset && (
                <div>
                    <button 
                        className={styles.groupToggle}
                        type="button"
                        onClick={triggerToggle}
                    >
                        <ToggleIcon className={classNames(styles.groupToggleIcon, [styles.groupToggleIconOpen, open])} />
                        {open ? 'Less' : 'More'}
                    </button>
                </div>
            )}
        </Element>
    )
}
