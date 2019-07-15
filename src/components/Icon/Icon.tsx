import React, { ReactElement } from 'react'
import { Component, classes } from '../../lib'
import { SvgProperties } from 'csstype'
import { useTransition, animated } from 'react-spring'

export type IconProps = {
    count?: number
    label?: string
    children: ReactElement<SvgProperties>
}

export const Icon: Component<IconProps> = ({
    as: Icon = 'span',
    children,
    count,
    label,
    ...props
}) => {    
    const countTransitions = useTransition(count, p => p, {
        from: { position: 'absolute', opacity: 0, transform: 'scale(0) translateY(-4rem)', transformOrigin: 'center' },
        enter: { opacity: 1, transform: 'scale(1) translateY(0)' },
        leave: { opacity: 0, transform: 'scale(0) translateY(4rem)' },
    })

    const hasCount = typeof count === 'number'
    
    return (
        <Icon {...props} className={classes('icon', props.className)}>
            <span className={classes('icon__wrapper', ['--count', hasCount])}>

                <span className="icon__svg">
                    {children}
                </span>

                {countTransitions.map(({ item, props, key }) => item ? (
                    <animated.span className="icon__count" style={props} key={key}>
                        {item > 99 ? '+99' : count}
                    </animated.span>
                ) : null)}
            </span>

            {label ? (
                <span className={classes('icon__label', ['--count', hasCount])}>
                    {label}
                </span>
            ) : null}

            <style jsx global>{`
                .icon {
                    align-items: center;
                    color: inherit;
                    display: inline-flex;
                    flex-direction: column;
                    font-size: inherit;
                    line-height: 0;
                }

                .icon[href], a.icon, 
                .icon [href] {
                    border-bottom: 0 none;
                    text-decoration: none;
                }

                .icon__svg svg {
                    fill: currentColor;
                    height: 1em;
                    width: auto;
                }

                .icon__wrapper {
                    position: relative;

                    &.--count {
                        margin-right: 0.4em;
                    }
                }

                .icon__label {
                    color: inherit;
                    font-size: 0.5em;
                    font-weight: 600;
                    text-overflow: ellipsis;
                    line-height: 1.1;
                    margin-top: 0.6rem;

                    &.--count {
                        padding-right: 0.9em;
                    }
                }

                .icon .icon__count {
                    align-items: center;
                    color: inherit;
                    display: flex;
                    font-size: 0.5em;
                    justify-content: center;
                    left: calc(100% + 0.2em);
                    position: absolute;
                    top: -0.3em;
                }
            `}</style>
        </Icon>
    )
}
