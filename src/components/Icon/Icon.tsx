import React from 'react'
import { Component, Props, Element, classNames } from '../../lib'
import defaultClasses from './Icon.css'

import { useTransition, animated } from 'react-spring'
import { ReactComponentLike } from 'prop-types'

export type IconProps = Props<{
    classes?: typeof defaultClasses
    count?: number
    svg?: ReactComponentLike
    text?: string | null
}>

export const Icon: Component<IconProps> = ({
    children,
    classes,
    count,
    svg: Svg,
    text,
    ...props
}) => {    
    const styles = { ...defaultClasses, ...classes }

    const countTransitions = useTransition(count, p => p, {
        from: { position: 'absolute', opacity: 0, transform: 'scale(0) translateY(-4rem)', transformOrigin: 'center' },
        enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
        leave: { opacity: 0, transform: 'scale(0) translateY(4rem)' },
    })

    const hasCount = typeof count === 'number'
    
    return (
        <Element as="span" 
            {...props} 
            className={styles.root}
        >
            <span className={classNames(styles.wrapper, [styles.hasCount, hasCount])}>

                <span className={styles.svg}>
                   { Svg ? <Svg /> : children }
                </span>

                {countTransitions.map(({ item, props, key }) => item ? (
                    <animated.span 
                        className={styles.count} 
                        style={props} 
                        key={key}
                    >
                        {item > 99 ? '+99' : count}
                    </animated.span>
                ) : null)}
            </span>

            {text ? (
                <span className={classNames(styles.label, [styles.hasCount, hasCount])}>
                    {text}
                </span>
            ) : null}
        </Element>
    )
}
