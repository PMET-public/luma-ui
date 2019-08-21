import React, { ReactNode, useContext } from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import styles from './HotSpots.Item.css'


import { useTransition, animated } from 'react-spring'

import { HotSpotsContext } from './HotSpots'

export type HotSpotItemProps = Props<{
    children?: ReactNode
    coords: { x: number, y: number }
    id: string
    label: string
}>

export const HotSpotsItem: Component<HotSpotItemProps> = ({
    children,
    coords,
    id,
    label,
    ...props
}) => {

   

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
        <Element className={styles.root} {...props}>
            <div
                className={classNames(
                    styles.wrapper,
                    [styles.right, coords.x > 50],
                    [styles.left, coords.x < 50],
                    [styles.bottom, coords.y > 50],
                    [styles.top, coords.y < 50]
                )}
                style={{
                    ['--coords-x' as any]: `${coords.x}%`,
                    ['--coords-y' as any]: `${coords.y}%`,
                }}
            >
                <button
                    aria-label={label}
                    className={classNames(styles.button, [styles.active, active])}
                    onClick={handleToggle}
                    tabIndex={0}
                    type="button"
                />

                {children && transitions.map(({ item, key, props }) => item && (
                    <animated.div
                        className={styles.content}
                        key={key}
                        style={props}
                    >
                        {children}
                    </animated.div>
                ))}
            </div>
        </Element>
    )
}
